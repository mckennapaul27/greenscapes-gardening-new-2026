import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Send acknowledgement email to the enquirer
    const acknowledgementEmail = await resend.emails.send({
      from: "Greenscapes Gardening <noreply@mail.greenscapes-gardening.co.uk>",
      to: email,
      subject: "Thank you for contacting Greenscapes Gardening",
      replyTo: "simon@greenscapes-gardening.co.uk",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #339935;">Thank you for contacting Greenscapes Gardening</h2>
          <p>Dear ${name},</p>
          <p>Thank you for getting in touch with us. We have received your enquiry and will get back to you as soon as possible.</p>
          <p><strong>Your enquiry details:</strong></p>
          <ul>
            <li><strong>Subject:</strong> ${subject}</li>
            <li><strong>Message:</strong> ${message}</li>
          </ul>
          <p>We aim to respond to all enquiries within 24 hours.</p>
          <p>Best regards,<br>The Greenscapes Gardening Team</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #666;">
            Greenscapes Gardening<br>
            19 Vine Street, Hazel Grove, Stockport, SK7 4JS<br>
            Phone: 0161 425 0035<br>
            Email: simon@greenscapes-gardening.co.uk
          </p>
        </div>
      `,
    });

    // Send notification email to Simon
    const notificationEmail = await resend.emails.send({
      from: "Greenscapes Gardening <noreply@mail.greenscapes-gardening.co.uk>",
      to: "simon@greenscapes-gardening.co.uk",
      replyTo: email,
      subject: `New Contact Form Enquiry: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #339935;">New Contact Form Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #666;">
            This email was sent from the contact form on greenscapes-gardening.co.uk
          </p>
        </div>
      `,
    });

    if (acknowledgementEmail.error || notificationEmail.error) {
      console.error(
        "Resend error:",
        acknowledgementEmail.error || notificationEmail.error
      );
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
