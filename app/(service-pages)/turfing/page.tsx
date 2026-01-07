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
  title: "Turfing Services | Premium Lawn Installation | Greenscapes Gardening",
  description:
    "Professional turfing and lawn installation services in Stockport and Cheshire. Premium Cheshire turf laying, lawn re-seeding, and lawn renovation services.",
  keywords: [
    "turfing",
    "turf laying",
    "lawn installation",
    "turfing services",
    "Cheshire turf",
    "lawn renovation",
    "turfing Stockport",
    "turfing Cheshire",
  ],
  openGraph: {
    title: "Turfing Services | Premium Lawn Installation | Greenscapes Gardening",
    description:
      "Professional turfing and lawn installation services. Premium Cheshire turf laying and lawn renovation.",
    type: "website",
  },
};

export default function TurfingPage() {
  const content = [
    "Greenscapes takes pride in revitalizing lawns across Stockport and Cheshire. Whether it's laying premium Cheshire turf or re-seeding specific areas, our team provides immediate, transformative results.",
    "We use high-quality turf that's locally sourced where possible, ensuring it's well-suited to our climate. Our professional installation process includes proper ground preparation, ensuring your new lawn has the best start.",
    "Enhance the appeal of your outdoors with our expert lawn solutions. From full lawn replacement to patching bare areas, we deliver results that will transform your garden's appearance.",
  ];

  const galleryImages = getServiceImages("turfing");
  const hasGallery = galleryImages.length > 0;

  const faqs = [
    {
      question: "What type of turf do you use?",
      answer:
        "We use premium quality turf, often locally sourced Cheshire turf which is well-suited to our climate. We can discuss the best turf type for your specific needs and garden conditions.",
    },
    {
      question: "How long does it take for new turf to establish?",
      answer:
        "With proper care, new turf typically establishes within 2-3 weeks. We'll provide you with care instructions to ensure your new lawn thrives. Regular watering is essential in the first few weeks.",
    },
    {
      question: "Can you repair patches in an existing lawn?",
      answer:
        "Yes, we can patch bare or damaged areas in existing lawns. We'll match the turf type where possible and ensure seamless integration with your existing lawn.",
    },
    {
      question: "When is the best time to lay new turf?",
      answer:
        "Turf can be laid year-round, but spring and autumn are ideal as the weather is milder. We avoid laying turf during very hot, dry periods or when the ground is frozen.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Turfing"
        subtitle="Professional turfing services for a perfect lawn. We lay premium quality turf and provide expert installation for immediate, beautiful results."
      />
      <ContentWithImage
        title="Premium Turf Installation"
        content={content}
        image="/turfing.webp"
        imageAlt="Turfing service"
      />
      {hasGallery && (
        <Gallery images={galleryImages} title="Our Turfing Work" />
      )}
      <CustomerFeedbackWrapper bgColor={hasGallery ? "bg-white" : "bg-[#f9f9f9]"} />
      <CTA
        title="Ready for a Perfect Lawn?"
        description="Transform your garden with our professional turfing service. Contact us today for a free quote."
      />
      <FAQWrapper faqs={faqs} />
      <ContactWrapper />
    </div>
  );
}
