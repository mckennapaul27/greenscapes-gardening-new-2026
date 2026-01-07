import type { Metadata } from "next";
import PageHeader from "../../../components/PageHeader";
import ContentWithImage from "../../../components/ContentWithImage";
import CustomerFeedbackWrapper from "../../../components/customer-feedback/wrapper";
import CTA from "../../../components/CTA";
import FAQWrapper from "../../../components/faq/wrapper";
import Services from "../../../components/Services";

export const metadata: Metadata = {
  title: "Garden Services in Hazel Grove | Greenscapes Gardening",
  description:
    "Professional garden maintenance, landscaping, and gardening services in Hazel Grove, Stockport. Expert gardeners serving Hazel Grove residents and businesses.",
  keywords: [
    "garden services Hazel Grove",
    "garden maintenance Hazel Grove",
    "landscaping Hazel Grove",
    "gardeners Hazel Grove",
    "lawn care Hazel Grove",
    "hedge trimming Hazel Grove",
  ],
  openGraph: {
    title: "Garden Services in Hazel Grove | Greenscapes Gardening",
    description:
      "Professional garden maintenance, landscaping, and gardening services in Hazel Grove, Stockport.",
    type: "website",
  },
};

export default function HazelGroveGardenServicesPage() {
  const content = [
    "Greenscapes Gardening provides professional garden services to residents and businesses in Hazel Grove. Our local team understands the area and is committed to delivering exceptional gardening solutions.",
    "We offer a comprehensive range of services from regular garden maintenance to complete landscaping projects. Our experienced gardeners bring their expertise and professional equipment to ensure your garden looks its best.",
    "Based in the local area, we're perfectly positioned to serve Hazel Grove with quick response times and reliable service. We work with you to create a maintenance schedule or project plan that suits your needs.",
  ];

  const faqs = [
    {
      question: "Do you cover Hazel Grove?",
      answer:
        "Yes, we provide garden services throughout Hazel Grove. As a local business, we're familiar with the area and can offer quick response times and reliable service.",
    },
    {
      question: "What garden services do you offer in Hazel Grove?",
      answer:
        "We offer a complete range of garden services in Hazel Grove including regular maintenance, landscaping, turfing, power washing, hedge services, waste removal, weed control, garden clearance, lawn care, and artificial grass installation.",
    },
    {
      question: "How do I get a quote for services in Hazel Grove?",
      answer:
        "Contact us via phone, email, or our website contact form. We'll arrange a convenient time to visit your property in Hazel Grove and provide a free, detailed quote for the services you need.",
    },
    {
      question:
        "Do you work with both residential and commercial properties in Hazel Grove?",
      answer:
        "Yes, we work with both residential and commercial properties in Hazel Grove. Whether you need regular maintenance for your home garden or services for a business property, we can help.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Garden Services in Hazel Grove"
        subtitle="Professional gardening services for Hazel Grove. Expert garden maintenance, landscaping, and specialist services delivered by our experienced local team."
      />
      <ContentWithImage
        title="Expert Garden Services in Hazel Grove"
        content={content}
        image="/home-nicely-manicured-garden.webp"
        imageAlt="Garden services in Hazel Grove"
      />
      <Services />
      <CustomerFeedbackWrapper bgColor="bg-white" />
      <CTA
        title="Ready to Improve Your Hazel Grove Garden?"
        description="Get in touch today for a free consultation and quote. Our expert team is ready to help with all your gardening needs in Hazel Grove."
      />
      <FAQWrapper faqs={faqs} />
    </div>
  );
}
