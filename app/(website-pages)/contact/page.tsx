import type { Metadata } from "next";
import PageHeader from "../../components/PageHeader";
import ContactWrapper from "../../components/contact/wrapper";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Quote | Greenscapes Gardening",
  description:
    "Get in touch with Greenscapes Gardening for a free quote. We serve Cheshire & South Manchester including Stockport, Bramhall, Poynton, Hazel Grove, and surrounding areas. Contact us today.",
  keywords: [
    "contact Greenscapes",
    "garden services quote",
    "free quote",
    "contact gardeners",
    "garden maintenance quote",
    "landscaping quote",
    "contact Cheshire",
    "contact Stockport",
  ],
  openGraph: {
    title: "Contact Us | Get a Free Quote | Greenscapes Gardening",
    description:
      "Get in touch with us for a free quote. We serve Cheshire & South Manchester and surrounding areas.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with us for a free quote. We serve Cheshire & South Manchester and surrounding areas. Our experienced team is ready to help with all your gardening needs."
      />
      <ContactWrapper />
    </div>
  );
}
