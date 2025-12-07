import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpeg"
          alt="Greenscapes Gardening Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 px-4 max-w-6xl mx-auto text-white">
        <h1 className="text-4xl lg:text-5xl  font-bold mb-6 leading-tight">
          Greenscapes Gardening Services
          <br />
          Cheshire & South Manchester
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Reliable Cheshire gardeners. We&apos;re making your outdoor dreams
          come true. Experienced domestic garden maintenance.
        </p>
        <Link
          href="#contact"
          className="inline-block bg-[#339935] hover:bg-[#2d7d2f] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
        >
          Contact Us Today
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-[#339935] text-white py-3 text-center z-10">
        <p className="text-sm md:text-base">
          trusted by customers in your area
        </p>
      </div>
    </section>
  );
}
