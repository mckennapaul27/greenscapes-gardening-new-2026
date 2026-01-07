"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

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
        <div
          className="hamburger-react"
          aria-expanded="false"
          role="button"
          tabIndex={0}
          style={{
            cursor: "pointer",
            height: "48px",
            position: "relative",
            transition: "0.4s cubic-bezier(0, 0, 0, 1)",
            userSelect: "none",
            width: "48px",
            outline: "none",
          }}
        >
          <div
            style={{
              transition: "0.2s cubic-bezier(0, 0, 0, 1) 0.2s",
              transform: "none",
            }}
          >
            <div
              style={{
                background: "rgb(255, 255, 255)",
                height: "2px",
                left: "12px",
                position: "absolute",
                width: "24px",
                top: "16px",
                transition: "0.2s cubic-bezier(0, 0, 0, 1)",
                transform: "none",
              }}
            ></div>
          </div>
          <div
            style={{
              transition: "0.2s cubic-bezier(0, 0, 0, 1)",
              opacity: 1,
            }}
          >
            <div
              style={{
                background: "rgb(255, 255, 255)",
                height: "2px",
                left: "12px",
                position: "absolute",
                width: "24px",
                top: "23px",
                transition: "0.2s cubic-bezier(0, 0, 0, 1)",
              }}
            ></div>
          </div>
          <div
            style={{
              transition: "0.2s cubic-bezier(0, 0, 0, 1) 0.2s",
              transform: "none",
            }}
          >
            <div
              style={{
                background: "rgb(255, 255, 255)",
                height: "2px",
                left: "12px",
                position: "absolute",
                width: "24px",
                top: "30px",
                transition: "0.2s cubic-bezier(0, 0, 0, 1)",
                transform: "none",
              }}
            ></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
