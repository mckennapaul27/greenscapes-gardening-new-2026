import Image from "next/image";

interface GalleryProps {
  images: string[];
  title?: string;
}

export default function Gallery({ images, title }: GalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className="bg-[#f9f9f9] py-16 md:py-24">
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              {title}
            </h2>
          </div>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-48 md:h-64 rounded-lg overflow-hidden"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

