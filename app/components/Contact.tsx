"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Globe } from "lucide-react";
import Button from "./ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="bg-[#f9f9f9] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl text-center font-semibold text-gray-900 mb-6">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-center">
            Get in touch with us for a free quote. We serve Cheshire & South
            Manchester and surrounding areas.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#339935]"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#339935]"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#339935]"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#339935]"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#339935]"
              />
            </div>
            <Button type="submit" variant="primary" size="md" fullWidth>
              Send message
            </Button>
          </form>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Address</p>
                  <p className="text-gray-600">
                    19 Vine Street, Hazel Grove, Stockport, SK7 4JS
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Email</p>
                  <a
                    href="mailto:simon@greenscapes-gardening.co.uk"
                    className="text-gray-700 hover:underline"
                  >
                    simon@greenscapes-gardening.co.uk
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Phone</p>
                  <a
                    href="tel:01614250035"
                    className="text-gray-700 hover:underline"
                  >
                    0161 425 0035
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Website</p>
                  <a
                    href="https://www.greenscapes-gardening.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:underline"
                  >
                    www.greenscapes-gardening.co.uk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
