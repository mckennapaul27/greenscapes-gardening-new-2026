import type { Metadata } from "next";
import PageHeader from "../../../components/PageHeader";
import ContentWithImage from "../../../components/ContentWithImage";
import CustomerFeedbackWrapper from "../../../components/customer-feedback/wrapper";
import CTA from "../../../components/CTA";
import FAQWrapper from "../../../components/faq/wrapper";
import Services from "../../../components/Services";

export const metadata: Metadata = {
  title: "Garden Services in Bramhall | Greenscapes Gardening",
  description:
    "Professional garden maintenance, landscaping, and gardening services in Bramhall, Stockport. Expert gardeners serving Bramhall residents and businesses.",
  keywords: [
    "garden services Bramhall",
    "garden maintenance Bramhall",
    "landscaping Bramhall",
    "gardeners Bramhall",
    "lawn care Bramhall",
    "hedge trimming Bramhall",
  ],
  openGraph: {
    title: "Garden Services in Bramhall | Greenscapes Gardening",
    description:
      "Professional garden maintenance, landscaping, and gardening services in Bramhall, Stockport.",
    type: "website",
  },
};

export default function BramhallGardenServicesPage() {
  const content = [
    "Greenscapes Gardening provides professional garden services to Bramhall and the surrounding Stockport area. Our experienced team is dedicated to helping you create and maintain beautiful outdoor spaces.",
    "We understand that gardens in Bramhall come in all shapes and sizes, and we work with you to provide tailored solutions. From elegant formal gardens to more relaxed natural spaces, we have the expertise to help.",
    "Our services range from regular maintenance to complete garden makeovers. We bring professional equipment, years of experience, and a commitment to quality to every job we undertake in Bramhall.",
  ];

  const faqs = [
    {
      question: "Do you cover Bramhall?",
      answer:
        "Yes, we provide garden services throughout Bramhall and the surrounding Stockport area. We're a local business with extensive experience serving Bramhall residents and businesses.",
    },
    {
      question: "What garden services are available in Bramhall?",
      answer:
        "We offer a complete range of garden services in Bramhall including regular maintenance, landscaping, turfing, power washing, hedge services, garden waste removal, weed control, garden clearance, lawn care, and artificial grass installation.",
    },
    {
      question: "How do I book a service in Bramhall?",
      answer:
        "Simply contact us via phone, email, or our website contact form. We'll arrange a convenient time to visit your property in Bramhall and provide a free, no-obligation quote for the services you need.",
    },
    {
      question: "Are you insured to work in Bramhall?",
      answer:
        "Yes, we are fully insured and have all necessary certifications. We're happy to provide proof of insurance and can work with both residential and commercial properties in Bramhall.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Garden Services in Bramhall"
        subtitle="Professional gardening services for Bramhall. Expert garden maintenance, landscaping, and specialist services delivered by our experienced local team."
      />
      <ContentWithImage
        title="Expert Garden Services in Bramhall"
        content={content}
        image="/home-nicely-manicured-garden.webp"
        imageAlt="Garden services in Bramhall"
      />
      <Services />
      <CustomerFeedbackWrapper bgColor="bg-white" />
      <CTA
        title="Ready to Enhance Your Bramhall Garden?"
        description="Get in touch today for a free consultation and quote. Our expert team is ready to help with all your gardening needs in Bramhall."
      />
      <FAQWrapper faqs={faqs} />
    </div>
  );
}
