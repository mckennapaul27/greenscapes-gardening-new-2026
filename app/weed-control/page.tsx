import PageHeader from "../components/PageHeader";
import ContentWithImage from "../components/ContentWithImage";
import Gallery from "../components/Gallery";
import CustomerFeedback from "../components/CustomerFeedback";
import CTA from "../components/CTA";
import FAQs from "../components/FAQs";
import Contact from "../components/Contact";
import { getServiceImages } from "../lib/serviceImages";

export default function WeedControlPage() {
  const content = [
    "Effective weed control is essential for maintaining a healthy garden. Our expert team uses proven methods to eliminate weeds while protecting your plants.",
    "We offer both regular maintenance and one-off treatments to keep your garden weed-free year-round. Our approach combines manual removal with appropriate treatments, always considering the safety of your existing plants and the environment.",
    "Whether you need help with weeds in borders, lawns, patios, or driveways, we have the expertise and tools to tackle the problem effectively. We'll also provide advice on preventing future weed growth.",
  ];

  const galleryImages = getServiceImages("weed-control");
  const hasGallery = galleryImages.length > 0;

  const faqs = [
    {
      question: "What methods do you use for weed control?",
      answer:
        "We use a combination of manual removal and appropriate treatments, depending on the situation. We always prioritise methods that are safe for your existing plants and the environment. For patios and driveways, we may use specialised treatments.",
    },
    {
      question: "Will weed treatments harm my plants?",
      answer:
        "No, we're experienced in applying treatments selectively and using methods that target weeds without harming your desired plants. We'll discuss the approach with you before starting work.",
    },
    {
      question: "How long does weed control last?",
      answer:
        "The duration depends on the method used and the type of weeds. Some treatments provide longer-term control, while manual removal may need to be repeated. We can set up regular maintenance to keep weeds under control.",
    },
    {
      question: "Can you prevent weeds from coming back?",
      answer:
        "While we can't completely prevent all weeds, we can significantly reduce them and slow their return. We'll also provide advice on mulching and other preventative measures you can take.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Weed Control"
        subtitle="Professional weed control services to keep your garden weed-free. We use proven methods that protect your plants while effectively eliminating weeds."
      />
      <ContentWithImage
        title="Effective Weed Management"
        content={content}
        image="/planting-and-plant-care.webp"
        imageAlt="Weed control service"
      />
      {hasGallery && <Gallery images={galleryImages} title="Our Weed Control Service" />}
      <CustomerFeedback bgColor={hasGallery ? "bg-white" : "bg-[#f9f9f9]"} />
      <CTA
        title="Tired of Weeds Taking Over?"
        description="Let us help you regain control of your garden. Contact us today for professional weed control services."
      />
      <FAQs faqs={faqs} />
      <Contact />
    </div>
  );
}

