import type { Metadata } from "next";
import Hero from "./components/Hero";
import ServiceAreasWrapper from "./components/service-areas/wrapper";
import About from "./components/About";
import Services from "./components/Services";
// import LatestNews from "./components/LatestNews";
import ContactWrapper from "./components/contact/wrapper";
import CustomerFeedbackWrapper from "./components/customer-feedback/wrapper";
import FAQWrapper from "./components/faq/wrapper";

export const metadata: Metadata = {
  title: "Greenscapes Gardening Services | Cheshire & South Manchester",
  description:
    "Professional garden maintenance, landscaping, and gardening services in Cheshire & South Manchester. Expert gardeners serving Stockport, Bramhall, Poynton, Hazel Grove, and surrounding areas.",
  keywords: [
    "garden maintenance",
    "landscaping",
    "gardening services",
    "Cheshire",
    "South Manchester",
    "Stockport",
    "Bramhall",
    "Poynton",
    "Hazel Grove",
    "gardeners",
    "lawn care",
    "hedge trimming",
    "turfing",
    "power washing",
  ],
  openGraph: {
    title: "Greenscapes Gardening Services | Cheshire & South Manchester",
    description:
      "Professional garden maintenance, landscaping, and gardening services in Cheshire & South Manchester.",
    type: "website",
    locale: "en_GB",
  },
};

export default function Home() {
  const faqs = [
    {
      question: "What areas do you cover?",
      answer:
        "We serve Cheshire & South Manchester, including Bramhall, Alderley Edge, Poynton, Hazel Grove, Handforth, Prestbury, and surrounding areas.",
    },
    {
      question: "Do you provide your own equipment?",
      answer:
        "Yes, we bring all necessary equipment including lawn mowers, strimmers, hedge trimmers, and hand tools. You don't need to provide anything.",
    },
    {
      question: "How often should I have my garden maintained?",
      answer:
        "The frequency depends on your garden's size, type, and your preferences. We offer weekly, fortnightly, or monthly maintenance schedules. Most customers find fortnightly visits work well for keeping their garden in top condition.",
    },
    {
      question: "Do you offer free quotes?",
      answer:
        "Yes, we provide free, no-obligation quotes for all our services. Simply contact us and we'll arrange a convenient time to visit and discuss your requirements.",
    },
    {
      question: "Are you insured?",
      answer:
        "Yes, we are fully insured for public liability and have all necessary certifications. We're happy to provide proof of insurance upon request.",
    },
    {
      question: "What happens to garden waste?",
      answer:
        "We dispose of all garden waste responsibly and in accordance with environmental regulations. We're registered waste carriers and ensure all waste is properly disposed of or recycled where possible.",
    },
    {
      question: "Can you work around my schedule?",
      answer:
        "Absolutely. We understand that our customers have busy lives, and we'll work with you to find convenient times for garden maintenance visits that suit your schedule.",
    },
    {
      question: "Do you work in all weather conditions?",
      answer:
        "We work in most weather conditions, though we may need to reschedule during severe weather for safety reasons. We'll always communicate with you if we need to change an appointment.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, bank transfer, and card payments. Payment terms can be discussed when we provide your quote.",
    },
    {
      question: "How long have you been in business?",
      answer:
        "We have years of experience in the gardening industry and are a local, independent business based in Cheshire. We're committed to delivering high-quality work that exceeds our customers' expectations.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Greenscapes Gardening Services",
    description:
      "Professional garden maintenance, landscaping, and gardening services in Cheshire & South Manchester",
    url: "https://www.greenscapes-gardening.co.uk",
    telephone: "01614250035",
    email: "simon@greenscapes-gardening.co.uk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "19 Vine Street",
      addressLocality: "Hazel Grove",
      addressRegion: "Stockport",
      postalCode: "SK7 4JS",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "53.3833",
      longitude: "-2.1167",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Stockport",
      },
      {
        "@type": "City",
        name: "Bramhall",
      },
      {
        "@type": "City",
        name: "Poynton",
      },
      {
        "@type": "City",
        name: "Hazel Grove",
      },
      {
        "@type": "City",
        name: "Marple",
      },
      {
        "@type": "City",
        name: "Wilmslow",
      },
      {
        "@type": "City",
        name: "Woodford",
      },
    ],
    priceRange: "$$",
    image: "https://www.greenscapes-gardening.co.uk/greenscapes-logo.webp",
    sameAs: ["https://www.greenscapes-gardening.co.uk"],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ServiceAreasWrapper />
      <About />
      <Services />
      {/* <LatestNews /> */}
      <CustomerFeedbackWrapper />
      <ContactWrapper />

      <FAQWrapper faqs={faqs} />
    </main>
  );
}
