import type { Metadata } from "next";
import PageHeader from "../../../components/PageHeader";
import ContentWithImage from "../../../components/ContentWithImage";
import CustomerFeedbackWrapper from "../../../components/customer-feedback/wrapper";
import CTA from "../../../components/CTA";
import FAQWrapper from "../../../components/faq/wrapper";
import Services from "../../../components/Services";

export const metadata: Metadata = {
  title: "Garden Services in Stockport | Greenscapes Gardening",
  description:
    "Professional garden maintenance, landscaping, and gardening services in Stockport. Expert gardeners serving Stockport residents and businesses with quality garden care.",
  keywords: [
    "garden services Stockport",
    "garden maintenance Stockport",
    "landscaping Stockport",
    "gardeners Stockport",
    "lawn care Stockport",
    "hedge trimming Stockport",
  ],
  openGraph: {
    title: "Garden Services in Stockport | Greenscapes Gardening",
    description:
      "Professional garden maintenance, landscaping, and gardening services in Stockport.",
    type: "website",
  },
};

export default function StockportGardenServicesPage() {
  const content = [
    "Greenscapes Gardening provides professional garden services throughout Stockport and the surrounding areas. Our experienced team is dedicated to helping you create and maintain beautiful outdoor spaces.",
    "Whether you need regular garden maintenance, landscaping, turfing, or specialist services like hedge trimming and power washing, we have the expertise and equipment to deliver exceptional results.",
    "We understand that every garden is unique, and we work closely with our Stockport customers to provide tailored solutions that fit their needs and budget. From small residential gardens to larger commercial spaces, we're here to help.",
  ];

  const faqs = [
    {
      question: "Do you provide garden services in Stockport?",
      answer:
        "Yes, we provide comprehensive garden services throughout Stockport and the surrounding areas. We're a local business with extensive experience serving Stockport residents and businesses.",
    },
    {
      question: "What garden services do you offer in Stockport?",
      answer:
        "We offer a full range of garden services including garden maintenance, landscaping, turfing, power washing, hedge services, garden waste removal, weed control, garden clearance, grass cutting, and artificial grass installation.",
    },
    {
      question: "How quickly can you respond to requests in Stockport?",
      answer:
        "We aim to respond to all enquiries within 24 hours and can usually schedule visits within a few days, depending on the service required and our current schedule.",
    },
    {
      question: "Do you offer free quotes in Stockport?",
      answer:
        "Yes, we provide free, no-obligation quotes for all our services in Stockport. Simply contact us and we'll arrange a convenient time to visit and discuss your requirements.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Garden Services in Stockport"
        subtitle="Professional gardening services for Stockport residents and businesses. Expert garden maintenance, landscaping, and more to keep your outdoor spaces beautiful year-round."
      />
      <ContentWithImage
        title="Expert Garden Services in Stockport"
        content={content}
        image="/home-nicely-manicured-garden.webp"
        imageAlt="Garden services in Stockport"
      />
      <Services />
      <CustomerFeedbackWrapper bgColor="bg-white" />
      <CTA
        title="Ready to Transform Your Stockport Garden?"
        description="Get in touch today for a free consultation and quote. Our expert team is ready to help with all your gardening needs in Stockport."
      />
      <FAQWrapper faqs={faqs} />
    </div>
  );
}
