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
  title: "Garden Clearance Services | Overgrown Garden Clearance | Greenscapes",
  description:
    "Professional garden clearance services in Cheshire & South Manchester. Transform overgrown or neglected gardens. Comprehensive clearance including vegetation removal and debris clearing.",
  keywords: [
    "garden clearance",
    "garden clearance services",
    "overgrown garden clearance",
    "garden clearance Cheshire",
    "neglected garden clearance",
    "garden clearance Stockport",
    "garden clearance services",
  ],
  openGraph: {
    title: "Garden Clearance Services | Overgrown Garden Clearance | Greenscapes",
    description:
      "Professional garden clearance services. Transform overgrown or neglected gardens.",
    type: "website",
  },
};

export default function GardenClearancePage() {
  const content = [
    "Transform overgrown or neglected gardens with our comprehensive clearance service. We handle everything from removing unwanted vegetation to clearing debris, preparing your space for a fresh start.",
    "Whether your garden has become overgrown over time, or you've moved into a property with a neglected garden, we can help. Our team will assess what needs to be removed and what can be saved, working with you to create a plan.",
    "Let us help you reclaim your outdoor space. We'll clear away all unwanted growth, debris, and waste, leaving you with a clean slate ready for new planting or landscaping.",
  ];

  const galleryImages = getServiceImages("garden-clearance");
  const hasGallery = galleryImages.length > 0;

  const faqs = [
    {
      question: "What does a garden clearance include?",
      answer:
        "A full garden clearance includes removing overgrown vegetation, weeds, unwanted plants, debris, and waste. We can also remove old structures, sheds, or other items if needed. We'll discuss exactly what you want cleared before we start.",
    },
    {
      question: "Will you remove everything or can you save some plants?",
      answer:
        "We'll work with you to identify what you want to keep. We can carefully preserve plants you want to retain while clearing everything else. Just let us know your preferences.",
    },
    {
      question: "How long does a garden clearance take?",
      answer:
        "This depends on the size and condition of the garden. A small overgrown garden might take a day, while larger clearances could take several days. We'll provide a time estimate when we assess your garden.",
    },
    {
      question: "What happens to everything you remove?",
      answer:
        "We remove and dispose of all cleared material responsibly. As registered waste carriers, we ensure everything is disposed of at licensed facilities, with recycling where possible.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Garden Clearance"
        subtitle="Comprehensive garden clearance services to transform overgrown or neglected spaces. We'll clear everything away, leaving you with a clean slate for your new garden."
      />
      <ContentWithImage
        title="Complete Garden Clearance"
        content={content}
        image="/home-nicely-manicured-garden.webp"
        imageAlt="Garden clearance service"
      />
      {hasGallery && (
        <Gallery images={galleryImages} title="Our Garden Clearance Work" />
      )}
      <CustomerFeedbackWrapper bgColor={hasGallery ? "bg-white" : "bg-[#f9f9f9]"} />
      <CTA
        title="Ready to Reclaim Your Garden?"
        description="Let us transform your overgrown garden into a clean, ready-to-use space. Contact us today for a free quote."
      />
      <FAQWrapper faqs={faqs} />
      <ContactWrapper />
    </div>
  );
}
