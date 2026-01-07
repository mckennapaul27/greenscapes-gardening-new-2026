import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

export default function NavbarDesktop() {
  return (
    <nav className="hidden container mx-auto lg:flex items-center justify-between px-6 lg:px-12 py-4 bg-transparent absolute top-3 left-0 right-0 z-[100]">
      <Link href="/" className="flex items-center">
        <Image
          src="/greenscapes-logo.webp"
          alt="Greenscapes Logo"
          width={150}
          height={60}
          className="h-auto"
        />
      </Link>
      <div className="flex items-center gap-6 lg:gap-8">
        <Link
          href="/"
          className="text-white hover:text-[#339935] font-semibold transition-colors"
        >
          Home
        </Link>
        <Link
          href="/services"
          className="text-white hover:text-[#339935] font-semibold transition-colors"
        >
          Services
        </Link>
        <Link
          href="/garden-maintenance"
          className="text-white hover:text-[#339935] font-semibold transition-colors"
        >
          Garden Maintenance
        </Link>
        <Link
          href="/artificial-grass"
          className="text-white hover:text-[#339935] font-semibold transition-colors"
        >
          Artificial Grass
        </Link>
        <Link
          href="/landscaping"
          className="text-white hover:text-[#339935] font-semibold transition-colors"
        >
          Landscaping
        </Link>
        <Button asLink href="/contact" size="md">
          Contact Us
        </Button>
      </div>
    </nav>
  );
}
