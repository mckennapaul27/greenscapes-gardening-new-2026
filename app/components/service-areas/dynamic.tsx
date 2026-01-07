"use client";

import Marquee from "react-fast-marquee";

export default function ServiceAreas() {
  const areas = [
    "Bramhall",
    "Alderley Edge",
    "Poynton",
    "Hazel Grove",
    "Handforth",
    "Prestbury",
    "Stockport",
    "Wilmslow",
    "Cheadle",
    "Cheadle Hulme",
  ];

  // Duplicate areas for seamless loop
  const duplicatedAreas = [...areas, ...areas];

  return (
    <section className="bg-[#339935] py-6 overflow-hidden">
      <Marquee speed={50} gradient={false} className="text-white">
        {duplicatedAreas.map((area, index) => (
          <span key={index} className="text-base md:text-lg font-medium mx-8">
            {area}
          </span>
        ))}
      </Marquee>
    </section>
  );
}

