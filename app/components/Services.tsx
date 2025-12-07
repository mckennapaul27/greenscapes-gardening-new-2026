import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Garden Maintenance",
    image: "/garden-maintenance.webp",
    description:
      "At Greenscapes, our expertise spans a range of garden care essentials. From meticulous lawn maintenance to intricate plant care, our team ensures your garden remains vibrant and healthy throughout the year. Trust in our seasoned professionals to uphold the beauty and vitality of your outdoor sanctuary.",
    link: "/garden-maintenance",
  },
  // {
  //   title: "Tree Surgery",
  //   image: "/tree-surgery.webp",
  //   description:
  //     "At Greenscapes, we have certified tree surgeons who offer specialized services to maintain the health and aesthetics of your trees. From tree assessment, pruning, to safe tree removal, we provide a comprehensive range of tree surgery services. Ensure the safety and beauty of your property with our expert tree care.",
  //   link: "/tree-surgeon-bramhall",
  // },
  {
    title: "Turfing",
    image: "/turfing.webp",
    description:
      "Greenscapes takes pride in revitalizing lawns across Stockport and Cheshire. Whether it's laying premium Cheshire turf or re-seeding specific areas, our team provides immediate, transformative results. Enhance the appeal of your outdoors with our expert lawn solutions.",
    link: "/services",
  },
  {
    title: "Power Washing",
    image: "/power-washing.webp",
    description:
      "Greenscapes elevates the cleanliness and allure of your outdoor areas. Harnessing advanced power washing techniques, we rid surfaces of stubborn stains and accumulated grime. Trust in our expertise to rejuvenate your spaces, giving them a renewed gleam.",
    link: "/services",
  },
  {
    title: "Landscaping",
    image: "/landscaping.webp",
    description:
      "With Greenscapes, discover the art of curated outdoor aesthetics. Our team specializes in soft landscaping, blending plant choices with design finesse. Whether crafting serene spaces or dynamic gardens, we tailor each project to resonate with your vision.",
    link: "/landscaping",
  },
  {
    title: "Planting & Plant Care",
    image: "/planting-and-plant-care.webp",
    description:
      "At Greenscapes, we champion the joy plants bring to gardens. Offering tailored planting services, we either provide or nurture your chosen plants. Our experts advise on selections, ensuring every plant thrives in its new home, enriching your garden experience.",
    link: "/services",
  },
  {
    title: "Hedge & Tree Pruning",
    image: "/hedge-tree-pruning.webp",
    description:
      "With Greenscapes, your hedges and trees receive unparalleled care. From precise trimming to expert pruning, we manage all tree types. Whether you aim for aesthetic appeal or safety, count on us to achieve the ideal balance for your greenery.",
    link: "/services",
  },
];

export default function Services() {
  return (
    <section className="bg-[#f9f9f9] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#339935] text-sm font-semibold uppercase tracking-wide mb-2">
            SERVICES
          </p>
          <h2 className="text-2xl md:text-3xl text-center font-semibold text-gray-900 mb-6">
            We Offer Many Services to Our Great Customers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive gardening services with a commitment to
            quality and customer satisfaction. Our experienced team is here to
            help transform and maintain your outdoor spaces.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-block text-gray-900 font-semibold hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
