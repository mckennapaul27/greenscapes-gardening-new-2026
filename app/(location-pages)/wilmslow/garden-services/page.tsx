import type { Metadata } from "next";
import PageHeader from "../../../components/PageHeader";
import ContentWithImage from "../../../components/ContentWithImage";
import CustomerFeedbackWrapper from "../../../components/customer-feedback/wrapper";
import CTA from "../../../components/CTA";
import FAQWrapper from "../../../components/faq/wrapper";
import Services from "../../../components/Services";

export const metadata: Metadata = {
  title: "Garden Services in Wilmslow | Greenscapes Gardening",
  description:
    "Professional garden maintenance, landscaping, and gardening services in Wilmslow, Cheshire. Expert gardeners serving Wilmslow residents and businesses.",
  keywords: [
    "garden services Wilmslow",
    "garden maintenance Wilmslow",
    "landscaping Wilmslow",
    "gardeners Wilmslow",
    "lawn care Wilmslow",
    "hedge trimming Wilmslow",
  ],
  openGraph: {
    title: "Garden Services in Wilmslow | Greenscapes Gardening",
    description:
      "Professional garden maintenance, landscaping, and gardening services in Wilmslow, Cheshire.",
    type: "website",
  },
};

export default function WilmslowGardenServicesPage() {
  const content = [
    "Greenscapes Gardening provides professional garden services to Wilmslow and the surrounding Cheshire area. Our experienced team is dedicated to helping you create and maintain beautiful outdoor spaces.",
    "We understand that gardens in Wilmslow often require careful attention to detail and quality workmanship. From elegant formal gardens to more relaxed natural spaces, we have the expertise to help.",
    "Our services range from regular maintenance to complete garden makeovers. We bring professional equipment, years of experience, and a commitment to quality to every job we undertake in Wilmslow.",
  ];

  const faqs = [
    {
      question: "Do you cover Wilmslow?",
      answer:
        "Yes, we provide garden services throughout Wilmslow and the surrounding Cheshire area. We're a local business with extensive experience serving Wilmslow residents and businesses.",
    },
    {
      question: "What garden services are available in Wilmslow?",
      answer:
        "We offer a complete range of garden services in Wilmslow including regular maintenance, landscaping, turfing, power washing, hedge services, garden waste removal, weed control, garden clearance, lawn care, and artificial grass installation.",
    },
    {
      question: "How do I get a quote for services in Wilmslow?",
      answer:
        "Contact us via phone, email, or our website contact form. We'll arrange a convenient time to visit your property in Wilmslow and provide a free, detailed quote for the services you need.",
    },
    {
      question:
        "Do you work with both residential and commercial properties in Wilmslow?",
      answer:
        "Yes, we work with both residential and commercial properties in Wilmslow. Whether you need regular maintenance for your home garden or services for a business property, we can help.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Garden Services in Wilmslow"
        subtitle="Professional gardening services for Wilmslow. Expert garden maintenance, landscaping, and specialist services delivered by our experienced local team."
      />
      <ContentWithImage
        title="Expert Garden Services in Wilmslow"
        content={content}
        image="/home-nicely-manicured-garden.webp"
        imageAlt="Garden services in Wilmslow"
      />
      <Services />
      <CustomerFeedbackWrapper bgColor="bg-white" />
      <CTA
        title="Ready to Enhance Your Wilmslow Garden?"
        description="Get in touch today for a free consultation and quote. Our expert team is ready to help with all your gardening needs in Wilmslow."
      />
      <FAQWrapper faqs={faqs} />
    </div>
  );
}
