import type { Metadata } from "next";
import PageHeader from "../../../components/PageHeader";
import ContentWithImage from "../../../components/ContentWithImage";
import CustomerFeedbackWrapper from "../../../components/customer-feedback/wrapper";
import CTA from "../../../components/CTA";
import FAQWrapper from "../../../components/faq/wrapper";
import Services from "../../../components/Services";

export const metadata: Metadata = {
  title: "Garden Services in Poynton | Greenscapes Gardening",
  description:
    "Professional garden maintenance, landscaping, and gardening services in Poynton, Cheshire. Expert gardeners serving Poynton with quality garden care and maintenance.",
  keywords: [
    "garden services Poynton",
    "garden maintenance Poynton",
    "landscaping Poynton",
    "gardeners Poynton",
    "lawn care Poynton",
    "hedge trimming Poynton",
  ],
  openGraph: {
    title: "Garden Services in Poynton | Greenscapes Gardening",
    description:
      "Professional garden maintenance, landscaping, and gardening services in Poynton, Cheshire.",
    type: "website",
  },
};

export default function PoyntonGardenServicesPage() {
  const content = [
    "Greenscapes Gardening is proud to serve Poynton and the surrounding Cheshire area. We provide professional, reliable garden services to help you maintain and enhance your outdoor spaces.",
    "Our team brings years of experience and a passion for gardening to every project. From regular maintenance to complete garden transformations, we're committed to delivering exceptional results for our Poynton customers.",
    "We understand the unique character of gardens in Poynton and work with local conditions to ensure your garden thrives. Whether you need weekly maintenance or a one-off project, we're here to help.",
  ];

  const faqs = [
    {
      question: "Do you provide garden services in Poynton?",
      answer:
        "Yes, we provide comprehensive garden services throughout Poynton and the surrounding Cheshire area. We're experienced in working with local gardens and understand the specific needs of the area.",
    },
    {
      question: "What services are available in Poynton?",
      answer:
        "We offer all our services in Poynton including garden maintenance, landscaping, turfing, power washing, hedge trimming, garden waste removal, weed control, garden clearance, lawn care, and artificial grass installation.",
    },
    {
      question: "How do I book a service in Poynton?",
      answer:
        "Simply contact us via phone, email, or our contact form. We'll arrange a convenient time to visit your property in Poynton and provide a free, no-obligation quote.",
    },
    {
      question: "Are you insured to work in Poynton?",
      answer:
        "Yes, we are fully insured and have all necessary certifications. We're happy to provide proof of insurance and can work with both residential and commercial properties in Poynton.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Garden Services in Poynton"
        subtitle="Professional gardening services for Poynton. Expert garden maintenance, landscaping, and specialist services to keep your outdoor spaces beautiful throughout the year."
      />
      <ContentWithImage
        title="Expert Garden Services in Poynton"
        content={content}
        image="/home-nicely-manicured-garden.webp"
        imageAlt="Garden services in Poynton"
      />
      <Services />
      <CustomerFeedbackWrapper bgColor="bg-white" />
      <CTA
        title="Ready to Enhance Your Poynton Garden?"
        description="Contact us today for a free consultation and quote. Our experienced team is ready to help with all your gardening needs in Poynton."
      />
      <FAQWrapper faqs={faqs} />
    </div>
  );
}
