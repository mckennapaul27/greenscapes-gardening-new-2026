import type { Metadata } from "next";
import PageHeader from "../../../components/PageHeader";
import ContentWithImage from "../../../components/ContentWithImage";
import CustomerFeedbackWrapper from "../../../components/customer-feedback/wrapper";
import CTA from "../../../components/CTA";
import FAQWrapper from "../../../components/faq/wrapper";
import Services from "../../../components/Services";

export const metadata: Metadata = {
  title: "Garden Services in Marple | Greenscapes Gardening",
  description:
    "Professional garden maintenance, landscaping, and gardening services in Marple, Stockport. Expert gardeners serving Marple with quality garden care.",
  keywords: [
    "garden services Marple",
    "garden maintenance Marple",
    "landscaping Marple",
    "gardeners Marple",
    "lawn care Marple",
    "hedge trimming Marple",
  ],
  openGraph: {
    title: "Garden Services in Marple | Greenscapes Gardening",
    description:
      "Professional garden maintenance, landscaping, and gardening services in Marple, Stockport.",
    type: "website",
  },
};

export default function MarpleGardenServicesPage() {
  const content = [
    "Greenscapes Gardening is delighted to serve Marple and the surrounding areas. We provide professional, reliable garden services to help you create and maintain beautiful outdoor spaces.",
    "Our experienced team understands the unique character of gardens in Marple and works with local conditions to ensure your garden thrives. From regular maintenance to complete transformations, we're here to help.",
    "We bring all necessary equipment and expertise to every job, ensuring professional results every time. Whether you need weekly maintenance or a one-off project, we work with you to deliver exactly what you need.",
  ];

  const faqs = [
    {
      question: "Do you provide garden services in Marple?",
      answer:
        "Yes, we provide comprehensive garden services throughout Marple and the surrounding areas. We're experienced in working with local gardens and understand the specific requirements of the area.",
    },
    {
      question: "What services can you provide in Marple?",
      answer:
        "We offer all our services in Marple including garden maintenance, landscaping, turfing, power washing, hedge trimming, garden waste removal, weed control, garden clearance, lawn care, and artificial grass supply and installation.",
    },
    {
      question: "How quickly can you respond to requests in Marple?",
      answer:
        "We aim to respond to all enquiries within 24 hours and can usually schedule visits within a few days. For urgent requests, we'll do our best to accommodate your needs.",
    },
    {
      question: "Do you offer regular maintenance contracts in Marple?",
      answer:
        "Yes, we offer flexible maintenance contracts in Marple. Whether you need weekly, fortnightly, or monthly visits, we can create a schedule that works for you and your garden.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Garden Services in Marple"
        subtitle="Professional gardening services for Marple. Expert garden maintenance, landscaping, and specialist services to keep your outdoor spaces looking their best."
      />
      <ContentWithImage
        title="Expert Garden Services in Marple"
        content={content}
        image="/home-nicely-manicured-garden.webp"
        imageAlt="Garden services in Marple"
      />
      <Services />
      <CustomerFeedbackWrapper bgColor="bg-white" />
      <CTA
        title="Ready to Transform Your Marple Garden?"
        description="Contact us today for a free consultation and quote. Our experienced team is ready to help with all your gardening needs in Marple."
      />
      <FAQWrapper faqs={faqs} />
    </div>
  );
}
