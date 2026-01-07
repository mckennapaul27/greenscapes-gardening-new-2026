import Image from "next/image";

interface ContentWithImageProps {
  title: string;
  content: string | string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function ContentWithImage({
  title,
  content,
  image,
  imageAlt,
  reverse = false,
}: ContentWithImageProps) {
  const contentArray = Array.isArray(content) ? content : [content];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div
          className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
            reverse ? "lg:grid-flow-dense" : ""
          }`}
        >
          <div className={`${reverse ? "lg:col-start-2" : ""}`}>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              {title}
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {contentArray.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className={`relative h-[400px] md:h-[500px] rounded-lg overflow-hidden ${reverse ? "lg:col-start-1 lg:row-start-1" : ""}`}>
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

