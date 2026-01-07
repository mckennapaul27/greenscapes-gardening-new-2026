import PageHeader from "../components/PageHeader";
import ContentWithImage from "../components/ContentWithImage";
import Gallery from "../components/Gallery";
import CustomerFeedback from "../components/CustomerFeedback";
import CTA from "../components/CTA";
import FAQs from "../components/FAQs";
import Contact from "../components/Contact";
import { getServiceImages } from "../lib/serviceImages";

export default function GardenWasteRemovalPage() {
  const content = [
    "Keep your garden clean and tidy with our professional waste removal service. We efficiently clear away garden debris, cuttings, and waste, leaving your outdoor space pristine.",
    "Whether it's regular maintenance waste, seasonal clearances, or one-off removals, we have the equipment and expertise to handle it. We can remove everything from grass cuttings and hedge trimmings to larger items like tree branches and old garden furniture.",
    "Our team ensures all waste is disposed of responsibly and in accordance with environmental regulations. We're registered waste carriers, so you can be confident your garden waste is handled properly.",
  ];

  const galleryImages = getServiceImages("garden-waste-removal");
  const hasGallery = galleryImages.length > 0;

  const faqs = [
    {
      question: "What types of garden waste do you remove?",
      answer:
        "We remove all types of garden waste including grass cuttings, hedge trimmings, leaves, branches, old plants, soil, and even larger items like old garden furniture or sheds (subject to size).",
    },
    {
      question: "How do you dispose of the waste?",
      answer:
        "As registered waste carriers, we dispose of all garden waste responsibly at licensed facilities. Much of it is recycled or composted where possible, in accordance with environmental regulations.",
    },
    {
      question: "Do you offer regular waste collection?",
      answer:
        "Yes, we can arrange regular waste collection as part of a maintenance schedule, or provide one-off removal services as needed.",
    },
    {
      question: "How much waste can you remove in one visit?",
      answer:
        "We have vehicles suitable for different volumes of waste. For very large clearances, we can arrange multiple trips. We'll assess your needs when we quote for the job.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Garden Waste Removal"
        subtitle="Professional garden waste removal service. We clear away all your garden debris and dispose of it responsibly, leaving your garden clean and tidy."
      />
      <ContentWithImage
        title="Efficient Waste Removal Service"
        content={content}
        image="/garden-maintenance.webp"
        imageAlt="Garden waste removal"
      />
      {hasGallery && (
        <Gallery images={galleryImages} title="Our Waste Removal Service" />
      )}
      <CustomerFeedback bgColor={hasGallery ? "bg-white" : "bg-[#f9f9f9]"} />
      <CTA
        title="Need Garden Waste Removed?"
        description="Let us clear your garden waste efficiently and responsibly. Contact us today for a quote."
      />
      <FAQs faqs={faqs} />
      <Contact />
    </div>
  );
}
