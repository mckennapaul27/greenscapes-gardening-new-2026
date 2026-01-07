import type { Metadata } from "next";
import PageHeader from "../../components/PageHeader";
import ContentWithImage from "../../components/ContentWithImage";
import Gallery from "../../components/Gallery";
import CustomerFeedbackWrapper from "../../components/customer-feedback/wrapper";
import CTA from "../../components/CTA";
import FAQWrapper from "../../components/faq/wrapper";
import ContactWrapper from "../../components/contact/wrapper";
import { getServiceImages } from "../../lib/serviceImages";

export const metadata: Metadata = {
  title: "Grass Cutting & Lawn Care Services | Professional Lawn Maintenance",
  description:
    "Professional grass cutting and lawn care services in Cheshire & South Manchester. Regular mowing, seasonal treatments, and expert lawn maintenance. Keep your lawn healthy and perfectly manicured.",
  keywords: [
    "grass cutting",
    "lawn care",
    "lawn mowing",
    "lawn maintenance",
    "grass cutting services",
    "lawn care services",
    "lawn mowing Cheshire",
    "professional lawn care",
  ],
  openGraph: {
    title: "Grass Cutting & Lawn Care Services | Professional Lawn Maintenance",
    description:
      "Professional grass cutting and lawn care services. Regular mowing and seasonal treatments.",
    type: "website",
  },
};

export default function GrassCuttingLawnCarePage() {
  const content = [
    "Maintain a pristine lawn with our regular grass cutting and lawn care service. From weekly mowing to seasonal treatments, we ensure your lawn stays healthy, green, and perfectly manicured throughout the year.",
    "Our lawn care service includes regular mowing at the correct height for the season, edging for neat borders, and seasonal treatments like scarifying, aerating, and overseeding when needed. We understand that different grass types and lawn conditions require different approaches.",
    "Professional lawn care tailored to your needs. Whether you have a small front lawn or extensive grounds, we'll keep it looking immaculate with our regular maintenance service.",
  ];

  const galleryImages = getServiceImages("grass-cutting-lawn-care");
  const hasGallery = galleryImages.length > 0;

  const faqs = [
    {
      question: "How often should my lawn be cut?",
      answer:
        "During the growing season (spring to autumn), most lawns benefit from weekly cutting. In peak summer, some lawns may need cutting twice a week. We'll adjust the frequency based on your lawn's growth rate and your preferences.",
    },
    {
      question: "What height should grass be cut to?",
      answer:
        "The ideal cutting height varies by season and grass type. Generally, we cut slightly higher in summer to help the lawn cope with heat and drought, and lower in spring and autumn. We'll adjust based on your specific lawn conditions.",
    },
    {
      question: "Do you offer additional lawn treatments?",
      answer:
        "Yes, we can provide seasonal treatments like scarifying (removing thatch), aerating (improving soil compaction), and overseeding (filling in bare patches). These are typically done in spring or autumn when conditions are ideal.",
    },
    {
      question: "What areas do you cover for lawn care?",
      answer:
        "We serve Cheshire & South Manchester, including Bramhall, Alderley Edge, Poynton, Hazel Grove, Handforth, Prestbury, and surrounding areas.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Grass Cutting & Lawn Care"
        subtitle="Professional lawn care services to keep your grass perfectly maintained. Regular mowing, edging, and seasonal treatments for a healthy, beautiful lawn."
      />
      <ContentWithImage
        title="Professional Lawn Maintenance"
        content={content}
        image="/turfing.webp"
        imageAlt="Grass cutting and lawn care"
      />
      {hasGallery && (
        <Gallery images={galleryImages} title="Our Lawn Care Work" />
      )}
      <CustomerFeedbackWrapper bgColor={hasGallery ? "bg-white" : "bg-[#f9f9f9]"} />
      <CTA
        title="Want a Perfect Lawn?"
        description="Let us keep your lawn looking immaculate year-round. Contact us today to discuss your lawn care needs."
      />
      <FAQWrapper faqs={faqs} />
      <ContactWrapper />
    </div>
  );
}
