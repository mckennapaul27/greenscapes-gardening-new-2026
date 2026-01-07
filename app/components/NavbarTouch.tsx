"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Button from "./ui/Button";

export default function NavbarTouch() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:hidden bg-transparent absolute top-0 left-0 right-0 z-[100]">
      <div className="flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/greenscapes-logo.webp"
            alt="Greenscapes Logo"
            width={120}
            height={50}
            className="h-auto"
          />
        </Link>
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          color="#ffffff"
          size={24}
        />
      </div>
      {isOpen && (
        <div className="px-4  py-8 space-y-3 bg-black/80 backdrop-blur-sm">
          <Link
            href="/"
            className="block text-white hover:text-[#fffcf4] transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="block text-white hover:text-[#fffcf4] transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/garden-maintenance"
            className="block text-white hover:text-[#fffcf4] transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Garden Maintenance
          </Link>
          <Link
            href="/artificial-grass"
            className="block text-white hover:text-[#fffcf4] transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Artificial Grass
          </Link>
          <Link
            href="/landscaping"
            className="block text-white hover:text-[#fffcf4] transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Landscaping
          </Link>
          <Button
            asLink
            href="#contact"
            fullWidth
            className="block text-center"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Button>
        </div>
      )}
    </nav>
  );
}
