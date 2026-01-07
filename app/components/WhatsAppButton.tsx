"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="https://wa.me/447772656034"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50"
    >
      <Image
        src="/WhatsApp.svg"
        alt="WhatsApp"
        width={50}
        height={50}
        className="h-16 w-16"
      />
    </a>
  );
}
