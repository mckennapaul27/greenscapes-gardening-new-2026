import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../../components/PageHeader";

export const metadata: Metadata = {
  title: "Our Services | Comprehensive Gardening Services | Greenscapes",
  description:
    "Comprehensive gardening services in Cheshire & South Manchester. Garden maintenance, landscaping, turfing, power washing, hedge services, and more. Expert gardeners serving Stockport, Bramhall, Poynton, and surrounding areas.",
  keywords: [
    "gardening services",
    "garden services",
    "garden maintenance",
    "landscaping",
    "turfing",
    "power washing",
    "hedge services",
    "garden services Cheshire",
    "garden services Stockport",
  ],
  openGraph: {
    title: "Our Services | Comprehensive Gardening Services | Greenscapes",
    description:
      "Comprehensive gardening services with a commitment to quality and customer satisfaction.",
    type: "website",
  },
};

const services = [
  {
    title: "Garden Maintenance",
    image: "/garden-maintenance.webp",
    description:
      "At Greenscapes, our expertise spans a range of garden care essentials. From meticulous lawn maintenance to intricate plant care, our team ensures your garden remains vibrant and healthy throughout the year. Trust in our seasoned professionals to uphold the beauty and vitality of your outdoor sanctuary.",
    link: "/garden-maintenance",
  },
  {
    title: "Garden Landscaping",
    image: "/landscaping.webp",
    description:
      "With Greenscapes, discover the art of curated outdoor aesthetics. Our team specialises in soft landscaping, blending plant choices with design finesse. Whether crafting serene spaces or dynamic gardens, we tailor each project to resonate with your vision.",
    link: "/landscaping",
  },
  {
    title: "Turfing",
    image: "/turfing.webp",
    description:
      "Greenscapes takes pride in revitalizing lawns across Stockport and Cheshire. Whether it's laying premium Cheshire turf or re-seeding specific areas, our team provides immediate, transformative results. Enhance the appeal of your outdoors with our expert lawn solutions.",
    link: "/turfing",
  },
  {
    title: "Power Washing",
    image: "/power-washing.webp",
    description:
      "Greenscapes elevates the cleanliness and allure of your outdoor areas. Harnessing advanced power washing techniques, we rid surfaces of stubborn stains and accumulated grime. Trust in our expertise to rejuvenate your spaces, giving them a renewed gleam.",
    link: "/power-washing",
  },
  {
    title: "Hedge Services",
    image: "/hedge-tree-pruning.webp",
    description:
      "With Greenscapes, your hedges receive unparalleled care. From precise trimming to expert pruning, we manage all hedge types. Whether you aim for aesthetic appeal or safety, count on us to achieve the ideal balance for your greenery.",
    link: "/hedge-planting-maintenance",
  },
  {
    title: "Garden Waste Removal",
    image: "/garden-maintenance.webp",
    description:
      "Keep your garden clean and tidy with our professional waste removal service. We efficiently clear away garden debris, cuttings, and waste, leaving your outdoor space pristine. Our team ensures all waste is disposed of responsibly and in accordance with environmental regulations.",
    link: "/garden-waste-removal",
  },
  {
    title: "Weed Control",
    image: "/planting-and-plant-care.webp",
    description:
      "Effective weed control is essential for maintaining a healthy garden. Our expert team uses proven methods to eliminate weeds while protecting your plants. We offer both regular maintenance and one-off treatments to keep your garden weed-free year-round.",
    link: "/weed-control",
  },
  {
    title: "Garden Clearance",
    image: "/home-nicely-manicured-garden.webp",
    description:
      "Transform overgrown or neglected gardens with our comprehensive clearance service. We handle everything from removing unwanted vegetation to clearing debris, preparing your space for a fresh start. Let us help you reclaim your outdoor space.",
    link: "/garden-clearance",
  },
  {
    title: "Grass Cutting & Lawn Care",
    image: "/turfing.webp",
    description:
      "Maintain a pristine lawn with our regular grass cutting and lawn care service. From weekly mowing to seasonal treatments, we ensure your lawn stays healthy, green, and perfectly manicured throughout the year. Professional lawn care tailored to your needs.",
    link: "/grass-cutting-lawn-care",
  },
  {
    title: "Artificial Grass - Supply & Fit",
    image: "/artificial-grass/fake-grass-1.webp",
    description:
      "Transform your outdoor space with premium artificial grass solutions. Our expert installation ensures a lush, low-maintenance lawn that looks beautiful year-round. Perfect for busy homeowners who want a pristine garden without the upkeep.",
    link: "/artificial-grass",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Services"
        subtitle="We provide comprehensive gardening services with a commitment to quality and customer satisfaction. Our experienced team is here to help transform and maintain your outdoor spaces."
      />
      <section className="bg-[#f9f9f9] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow block"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="inline-block text-gray-900 font-semibold hover:underline">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
