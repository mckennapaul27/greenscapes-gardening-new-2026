import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    title: "Deadhead an Astilbe",
    image: "/blog-deadhead-astible.webp",
    description: "Learn the best techniques for deadheading astilbes to keep your garden looking beautiful.",
    link: "/blog/how-to-deadhead-an-astilbe"
  },
  {
    title: "Winter Garden Maintenance",
    image: "/blog-winter-garden-maintenance.webp",
    description: "Essential tips for maintaining your garden during the winter months.",
    link: "/blog/winter-garden-maintenance"
  },
  {
    title: "Domestic Garden Maintenance Tips",
    image: "/blog-domestic-garden-maintenance.webp",
    description: "Practical advice for keeping your domestic garden in top condition year-round.",
    link: "/blog/domestic-garden-maintenance-wilmslow"
  }
];

export default function LatestNews() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl text-center lg:text-left font-semibold text-gray-900 mb-6">
            Latest news
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <Link
                  href={item.link}
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

