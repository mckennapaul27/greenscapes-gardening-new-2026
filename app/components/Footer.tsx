import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-[#fffcf4] py-12 lg:py-24"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z' fill='%23f7edd4' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 mb-8">
          <div>
            <div className="flex gap-4 mb-4 items-center">
              <Image
                src="/ea-waste-carrier.webp"
                alt="EA Waste Carrier"
                width={100}
                height={70}
                className="object-contain"
                style={{ aspectRatio: "100/70" }}
              />
              <Image
                src="/greenscapes-commercial-logo.webp"
                alt="Greenscapes Commercial"
                width={100}
                height={55}
                className="object-contain"
                style={{ aspectRatio: "100/55" }}
              />
              <Image
                src="/greenscapes-powerwashing.webp"
                alt="Greenscapes Powerwashing"
                width={100}
                height={40}
                className="object-contain"
                style={{ aspectRatio: "100/40" }}
              />
            </div>
            <p className="text-gray-700 text-sm mb-2">
              19 Vine Street, Hazel Grove, Stockport, SK7 4JS
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <a
                href="tel:01614250035"
                className="text-gray-700 hover:underline"
              >
                0161 425 0035
              </a>
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <a
                href="mailto:simon@greenscapes-gardening.co.uk"
                className="text-gray-700 hover:underline"
              >
                simon@greenscapes-gardening.co.uk
              </a>
            </p>
            <p className="text-gray-700 text-sm">
              <a
                href="https://www.greenscapes-gardening.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:underline"
              >
                www.greenscapes-gardening.co.uk
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
            <a
              href="https://www.facebook.com/greenscapesgardeners"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/facebook-logo.webp"
                alt="Facebook"
                width={40}
                height={40}
                className="h-auto"
              />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © 2024 GreenScapes. All Rights Reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Website design and Google Ads Management by</span>
              <a
                href="https://www.bunkerdigital.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:underline font-semibold"
              >
                Bunker Digital
              </a>
            </div>
            <div className="flex items-center">
              <Image
                src="/payment-options.svg"
                alt="Payment Options"
                width={200}
                height={40}
                className="h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
