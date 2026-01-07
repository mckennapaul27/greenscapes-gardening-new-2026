import PageHeader from "../components/PageHeader";
import ContentWithImage from "../components/ContentWithImage";
import Gallery from "../components/Gallery";
import CustomerFeedback from "../components/CustomerFeedback";
import CTA from "../components/CTA";
import FAQs from "../components/FAQs";
import Contact from "../components/Contact";
import { getServiceImages } from "../lib/serviceImages";

export default function ArtificialGrassPage() {
  const content = [
    "Transform your outdoor space with premium artificial grass solutions. Our expert installation ensures a lush, low-maintenance lawn that looks beautiful year-round.",
    "We supply and fit high-quality artificial grass that's perfect for busy homeowners who want a pristine garden without the upkeep. Our artificial grass looks and feels natural, providing a perfect green lawn regardless of weather conditions.",
    "Perfect for gardens, patios, balconies, and play areas. We handle everything from ground preparation to professional installation, ensuring your new artificial lawn is perfectly laid and will last for years to come.",
  ];

  const galleryImages = getServiceImages("artificial-grass");
  const hasGallery = galleryImages.length > 0;

  const faqs = [
    {
      question: "How long does artificial grass last?",
      answer:
        "High-quality artificial grass typically lasts 15-20 years with proper installation and minimal maintenance. The lifespan depends on the quality of the product and how well it's installed.",
    },
    {
      question: "Does artificial grass need maintenance?",
      answer:
        "Artificial grass requires minimal maintenance compared to real grass. Occasional brushing to keep the fibres upright, removing leaves and debris, and occasional hosing down is usually all that's needed.",
    },
    {
      question: "Can artificial grass be installed on any surface?",
      answer:
        "Artificial grass can be installed on most surfaces including soil, concrete, decking, and patios. We'll assess your surface and prepare it appropriately before installation.",
    },
    {
      question: "Is artificial grass safe for children and pets?",
      answer:
        "Yes, modern artificial grass is safe for children and pets. It's non-toxic and provides a soft, safe surface for play. It's also easy to clean and doesn't get muddy.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Artificial Grass - Supply & Fit"
        subtitle="Transform your garden with premium artificial grass. Expert supply and installation for a beautiful, low-maintenance lawn that looks perfect year-round."
      />
      <ContentWithImage
        title="Premium Artificial Grass Installation"
        content={content}
        image="/artificial-grass/fake-grass-1.webp"
        imageAlt="Artificial grass installation"
      />
      {hasGallery && (
        <Gallery
          images={galleryImages}
          title="Our Artificial Grass Installations"
        />
      )}
      <CustomerFeedback bgColor={hasGallery ? "bg-white" : "bg-[#f9f9f9]"} />
      <CTA
        title="Ready for a Perfect, Low-Maintenance Lawn?"
        description="Let us transform your garden with premium artificial grass. Contact us today for a free consultation and quote."
      />
      <FAQs faqs={faqs} />
      <Contact />
    </div>
  );
}
