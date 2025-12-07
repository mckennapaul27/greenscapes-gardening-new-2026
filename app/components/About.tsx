import Image from "next/image";
import { DollarSign, Star, Leaf, ThumbsUp, PoundSterling } from "lucide-react";

export default function About() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 ">
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/home-nicely-manicured-garden.webp"
              alt="Nicely manicured garden"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl text-center lg:text-left font-semibold text-gray-900 mb-6">
              About Greenscapes Gardening
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed text-center lg:text-left">
              We are a local, independent gardening business based in Cheshire,
              offering a wide range of gardening services to both domestic and
              commercial clients.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed text-center lg:text-left">
              With years of experience and a passion for creating beautiful
              outdoor spaces, we are committed to delivering high-quality work
              that exceeds our customers&apos; expectations.
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <PoundSterling className="w-8 h-8 mb-2 text-[#339935]" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Competitive Prices
                </h3>
                <p className="text-sm text-gray-600">
                  Fair and transparent pricing for all our services
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <Star className="w-8 h-8 mb-2 text-[#339935]" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Fulfill Your Dream
                </h3>
                <p className="text-sm text-gray-600">
                  Transform your garden into your ideal outdoor space
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <Leaf className="w-8 h-8 mb-2 text-[#339935]" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  High Quality Work
                </h3>
                <p className="text-sm text-gray-600">
                  Professional standards in every project we undertake
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <ThumbsUp className="w-8 h-8 mb-2 text-[#339935]" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Best Result
                </h3>
                <p className="text-sm text-gray-600">
                  Outstanding results that you&apos;ll love for years
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
