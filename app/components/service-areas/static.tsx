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
      <div className="flex text-white">
        {duplicatedAreas.map((area, index) => (
          <span key={index} className="text-base md:text-lg font-medium mx-8 whitespace-nowrap">
            {area}
          </span>
        ))}
      </div>
    </section>
  );
}

