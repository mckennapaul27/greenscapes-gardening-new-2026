import type { Metadata } from "next";
import PageHeader from "../../../components/PageHeader";
import ContentWithImage from "../../../components/ContentWithImage";
import CustomerFeedbackWrapper from "../../../components/customer-feedback/wrapper";
import CTA from "../../../components/CTA";
import FAQWrapper from "../../../components/faq/wrapper";
import Services from "../../../components/Services";

export const metadata: Metadata = {
  title: "Garden Services in Woodford | Greenscapes Gardening",
  description:
    "Professional garden maintenance, landscaping, and gardening services in Woodford, Cheshire. Expert gardeners serving Woodford with quality garden care.",
  keywords: [
    "garden services Woodford",
    "garden maintenance Woodford",
    "landscaping Woodford",
    "gardeners Woodford",
    "lawn care Woodford",
    "hedge trimming Woodford",
  ],
  openGraph: {
    title: "Garden Services in Woodford | Greenscapes Gardening",
    description:
      "Professional garden maintenance, landscaping, and gardening services in Woodford, Cheshire.",
    type: "website",
  },
};

export default function WoodfordGardenServicesPage() {
  const content = [
    "Greenscapes Gardening is proud to serve Woodford and the surrounding areas. We provide professional, reliable garden services to help you maintain and enhance your outdoor spaces.",
    "Our team brings years of experience and a passion for gardening to every project in Woodford. From regular maintenance to complete garden transformations, we're committed to delivering exceptional results.",
    "We understand the local area and work with Woodford's unique conditions to ensure your garden thrives. Whether you need weekly maintenance or a one-off project, we're here to help with professional service and expert advice.",
  ];

  const faqs = [
    {
      question: "Do you provide garden services in Woodford?",
      answer:
        "Yes, we provide comprehensive garden services throughout Woodford and the surrounding areas. We're experienced in working with local gardens and understand the specific needs of the area.",
    },
    {
      question: "What services do you offer in Woodford?",
      answer:
        "We offer all our services in Woodford including garden maintenance, landscaping, turfing, power washing, hedge trimming, garden waste removal, weed control, garden clearance, lawn care, and artificial grass supply and installation.",
    },
    {
      question: "How quickly can you respond to requests in Woodford?",
      answer:
        "We aim to respond to all enquiries within 24 hours and can usually schedule visits within a few days, depending on the service required and our current schedule.",
    },
    {
      question: "Do you offer free quotes in Woodford?",
      answer:
        "Yes, we provide free, no-obligation quotes for all our services in Woodford. Simply contact us and we'll arrange a convenient time to visit and discuss your requirements.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Garden Services in Woodford"
        subtitle="Professional gardening services for Woodford. Expert garden maintenance, landscaping, and specialist services to keep your outdoor spaces beautiful year-round."
      />
      <ContentWithImage
        title="Expert Garden Services in Woodford"
        content={content}
        image="/home-nicely-manicured-garden.webp"
        imageAlt="Garden services in Woodford"
      />
      <Services />
      <CustomerFeedbackWrapper bgColor="bg-white" />
      <CTA
        title="Ready to Transform Your Woodford Garden?"
        description="Contact us today for a free consultation and quote. Our experienced team is ready to help with all your gardening needs in Woodford."
      />
      <FAQWrapper faqs={faqs} />
    </div>
  );
}
