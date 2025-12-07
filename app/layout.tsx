import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavbarDesktop from "./components/NavbarDesktop";
import NavbarTouch from "./components/NavbarTouch";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Greenscapes Gardening Services Cheshire & South Manchester",
  description: "Reliable Cheshire gardeners. We're making your outdoor dreams come true. Experienced domestic garden maintenance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <div className="relative">
          <NavbarDesktop />
          <NavbarTouch />
          {children}
        </div>
      </body>
    </html>
  );
}
