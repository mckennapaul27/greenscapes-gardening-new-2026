import PageHeader from "../components/PageHeader";
import ContentWithImage from "../components/ContentWithImage";
import Gallery from "../components/Gallery";
import CustomerFeedback from "../components/CustomerFeedback";
import CTA from "../components/CTA";
import FAQs from "../components/FAQs";
import Contact from "../components/Contact";
import { getServiceImages } from "../lib/serviceImages";

export default function GardenMaintenancePage() {
  const content = [
    "At Greenscapes, our expertise spans a range of garden care essentials. From meticulous lawn maintenance to intricate plant care, our team ensures your garden remains vibrant and healthy throughout the year.",
    "We offer regular maintenance schedules tailored to your needs, whether that's weekly, fortnightly, or monthly visits. Our services include lawn mowing, edging, weeding, pruning, and general garden tidying.",
    "Trust in our seasoned professionals to uphold the beauty and vitality of your outdoor sanctuary. We understand that every garden is unique, and we work with you to create a maintenance plan that fits your lifestyle and budget.",
  ];

  const galleryImages = getServiceImages("garden-maintenance");
  const hasGallery = galleryImages.length > 0;

  const faqs = [
    {
      question: "How often should I have my garden maintained?",
      answer:
        "The frequency depends on your garden's size, type, and your preferences. We offer weekly, fortnightly, or monthly maintenance schedules. Most customers find fortnightly visits work well for keeping their garden in top condition.",
    },
    {
      question: "What services are included in garden maintenance?",
      answer:
        "Our garden maintenance service includes lawn mowing and edging, weeding, pruning of shrubs and hedges, deadheading flowers, general tidying, and seasonal tasks like leaf clearing in autumn.",
    },
    {
      question: "Do you provide your own equipment?",
      answer:
        "Yes, we bring all necessary equipment including lawn mowers, strimmers, hedge trimmers, and hand tools. You don't need to provide anything.",
    },
    {
      question: "What areas do you cover?",
      answer:
        "We serve Cheshire & South Manchester, including Bramhall, Alderley Edge, Poynton, Hazel Grove, Handforth, Prestbury, and surrounding areas.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Garden Maintenance"
        subtitle="Professional garden maintenance services to keep your outdoor space beautiful and healthy year-round. Regular care from our experienced team ensures your garden always looks its best."
      />
      <ContentWithImage
        title="Comprehensive Garden Care"
        content={content}
        image="/garden-maintenance.webp"
        imageAlt="Garden maintenance service"
      />
      {hasGallery && (
        <Gallery images={galleryImages} title="Our Garden Maintenance Work" />
      )}
      <CustomerFeedback bgColor={hasGallery ? "bg-white" : "bg-[#f9f9f9]"} />
      <CTA
        title="Ready to Transform Your Garden?"
        description="Get in touch today for a free consultation and quote. Let our expert team take care of your garden maintenance needs."
      />
      <FAQs faqs={faqs} />
      <Contact />
    </div>
  );
}
