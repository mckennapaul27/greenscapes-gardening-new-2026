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
  title: "Garden Landscaping Services | Greenscapes Gardening",
  description:
    "Expert garden landscaping and soft landscaping services in Cheshire & South Manchester. Professional landscape design, planting schemes, and garden transformation services.",
  keywords: [
    "garden landscaping",
    "landscaping services",
    "soft landscaping",
    "garden design",
    "landscape design",
    "garden transformation",
    "planting schemes",
    "landscaping Cheshire",
  ],
  openGraph: {
    title: "Garden Landscaping Services | Greenscapes Gardening",
    description:
      "Transform your outdoor space with our expert landscaping services. Professional design and installation.",
    type: "website",
  },
};

export default function LandscapingPage() {
  const content = [
    "With Greenscapes, discover the art of curated outdoor aesthetics. Our team specialises in soft landscaping, blending plant choices with design finesse.",
    "Whether crafting serene spaces or dynamic gardens, we tailor each project to resonate with your vision. From initial design consultation to final planting, we work closely with you to create outdoor spaces that reflect your style and complement your property.",
    "We use quality plants and materials, ensuring your new landscape will thrive and mature beautifully over time. Our expertise includes planting schemes, lawn installation, pathway design, and creating focal points that enhance your garden's appeal.",
  ];

  const galleryImages = getServiceImages("landscaping");
  const hasGallery = galleryImages.length > 0;

  const faqs = [
    {
      question: "What is soft landscaping?",
      answer:
        "Soft landscaping refers to the living elements of your garden - plants, trees, shrubs, lawns, and flowers. We design and install these elements to create beautiful, functional outdoor spaces.",
    },
    {
      question: "How long does a landscaping project take?",
      answer:
        "Project duration varies depending on size and complexity. A small garden redesign might take 1-2 weeks, while larger projects can take several weeks. We'll provide a detailed timeline during your consultation.",
    },
    {
      question: "Do you provide design services?",
      answer:
        "Yes, we offer design consultations where we discuss your vision, assess your space, and create a planting and layout plan tailored to your needs and preferences.",
    },
    {
      question: "What maintenance is needed after landscaping?",
      answer:
        "Newly landscaped gardens need regular watering and care in the first year. We can provide maintenance services to ensure your new plants establish well and your garden thrives.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Garden Landscaping"
        subtitle="Transform your outdoor space with our expert landscaping services. We create beautiful, functional gardens tailored to your vision and lifestyle."
      />
      <ContentWithImage
        title="Expert Landscape Design & Installation"
        content={content}
        image="/landscaping.webp"
        imageAlt="Garden landscaping service"
      />
      {hasGallery && (
        <Gallery images={galleryImages} title="Our Landscaping Projects" />
      )}
      <CustomerFeedbackWrapper bgColor={hasGallery ? "bg-white" : "bg-[#f9f9f9]"} />
      <CTA
        title="Ready to Create Your Dream Garden?"
        description="Let us bring your landscaping vision to life. Contact us today for a free consultation and design quote."
      />
      <FAQWrapper faqs={faqs} />
      <ContactWrapper />
    </div>
  );
}
