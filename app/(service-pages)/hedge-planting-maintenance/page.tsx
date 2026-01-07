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
  title: "Hedge Services | Hedge Trimming & Pruning | Greenscapes Gardening",
  description:
    "Professional hedge trimming, pruning, and maintenance services in Cheshire & South Manchester. Expert hedge care for all hedge types. Keep your hedges looking perfect year-round.",
  keywords: [
    "hedge trimming",
    "hedge pruning",
    "hedge services",
    "hedge maintenance",
    "hedge cutting",
    "hedge care",
    "hedge trimming services",
    "hedge services Cheshire",
  ],
  openGraph: {
    title: "Hedge Services | Hedge Trimming & Pruning | Greenscapes Gardening",
    description:
      "Professional hedge trimming and pruning services. Expert care for all hedge types.",
    type: "website",
  },
};

export default function HedgeServicesPage() {
  const content = [
    "With Greenscapes, your hedges receive unparalleled care. From precise trimming to expert pruning, we manage all hedge types.",
    "Whether you have formal hedges that need regular shaping, or informal hedges requiring maintenance, our team has the expertise to keep them looking their best. We understand the growth patterns of different hedge species and trim them at the right times.",
    "Whether you aim for aesthetic appeal or safety, count on us to achieve the ideal balance for your greenery. We can also help with hedge planting if you're looking to establish new boundaries or screening.",
  ];

  const galleryImages = getServiceImages("hedge-services");
  const hasGallery = galleryImages.length > 0;

  const faqs = [
    {
      question: "How often should hedges be trimmed?",
      answer:
        "Most hedges benefit from trimming 2-3 times per year, typically in late spring, mid-summer, and early autumn. Fast-growing hedges may need more frequent attention. We can set up a regular maintenance schedule for you.",
    },
    {
      question: "What types of hedges do you work with?",
      answer:
        "We work with all common hedge types including privet, leylandii, beech, yew, box, laurel, and many others. Each type has specific requirements which we understand and accommodate.",
    },
    {
      question: "Can you help with hedge planting?",
      answer:
        "Yes, we can help you establish new hedges. We'll advise on the best species for your needs, prepare the ground properly, and plant at the optimal spacing for a healthy, dense hedge.",
    },
    {
      question: "Do you dispose of hedge cuttings?",
      answer:
        "Yes, we can remove and dispose of all hedge cuttings as part of our service, leaving your garden tidy and clean.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Hedge Services"
        subtitle="Expert hedge trimming, pruning, and planting services. Keep your hedges healthy, neat, and perfectly maintained throughout the year."
      />
      <ContentWithImage
        title="Professional Hedge Care"
        content={content}
        image="/hedge-tree-pruning.webp"
        imageAlt="Hedge services"
      />
      {hasGallery && (
        <Gallery images={galleryImages} title="Our Hedge Services" />
      )}
      <CustomerFeedbackWrapper bgColor={hasGallery ? "bg-white" : "bg-[#f9f9f9]"} />
      <CTA
        title="Need Hedge Care Services?"
        description="Keep your hedges looking perfect year-round. Contact us today for professional hedge trimming and maintenance."
      />
      <FAQWrapper faqs={faqs} />
      <ContactWrapper />
    </div>
  );
}
