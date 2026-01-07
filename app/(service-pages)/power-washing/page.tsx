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
  title: "Power Washing Services | Professional Pressure Washing | Greenscapes",
  description:
    "Professional power washing and pressure washing services in Cheshire & South Manchester. Clean patios, driveways, decking, and outdoor surfaces. Expert cleaning services.",
  keywords: [
    "power washing",
    "pressure washing",
    "patio cleaning",
    "driveway cleaning",
    "decking cleaning",
    "outdoor cleaning",
    "power washing services",
    "pressure washing Cheshire",
  ],
  openGraph: {
    title: "Power Washing Services | Professional Pressure Washing | Greenscapes",
    description:
      "Professional power washing services to rejuvenate your outdoor spaces. Clean patios, driveways, and more.",
    type: "website",
  },
};

export default function PowerWashingPage() {
  const content = [
    "Greenscapes elevates the cleanliness and allure of your outdoor areas. Harnessing advanced power washing techniques, we rid surfaces of stubborn stains and accumulated grime.",
    "Our professional power washing service can transform patios, driveways, decking, pathways, and other hard surfaces. We use appropriate pressure settings to clean effectively without causing damage.",
    "Trust in our expertise to rejuvenate your spaces, giving them a renewed gleam. Whether it's removing algae, moss, dirt, or stains, we'll restore your outdoor surfaces to their former glory.",
  ];

  const galleryImages = getServiceImages("power-washing");
  const hasGallery = galleryImages.length > 0;

  const faqs = [
    {
      question: "What surfaces can you power wash?",
      answer:
        "We can power wash patios, driveways, decking, pathways, garden walls, and other hard surfaces. We use appropriate pressure settings for each surface type to ensure effective cleaning without damage.",
    },
    {
      question: "Will power washing damage my surfaces?",
      answer:
        "No, we use professional equipment with adjustable pressure settings. We select the appropriate pressure for each surface type to ensure thorough cleaning without causing damage.",
    },
    {
      question: "How long does a power washing job take?",
      answer:
        "The duration depends on the size of the area. A typical patio or driveway might take 2-4 hours. We'll provide a time estimate when we quote for your job.",
    },
    {
      question: "Do I need to do anything before you arrive?",
      answer:
        "It's helpful if you can clear the area of furniture, plant pots, and other items. We'll handle the rest, including protecting any plants or delicate areas nearby.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Power Washing"
        subtitle="Professional power washing services to restore your outdoor surfaces. We clean patios, driveways, decking, and more, leaving them looking like new."
      />
      <ContentWithImage
        title="Professional Surface Cleaning"
        content={content}
        image="/power-washing.webp"
        imageAlt="Power washing service"
      />
      {hasGallery && (
        <Gallery images={galleryImages} title="Our Power Washing Work" />
      )}
      <CustomerFeedbackWrapper bgColor={hasGallery ? "bg-white" : "bg-[#f9f9f9]"} />
      <CTA
        title="Ready to Restore Your Surfaces?"
        description="Let us bring your outdoor surfaces back to life. Contact us today for a free quote on our power washing service."
      />
      <FAQWrapper faqs={faqs} />
      <ContactWrapper />
    </div>
  );
}
