import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.greenscapes-gardening.co.uk";

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  // Service pages
  const servicePages = [
    "garden-maintenance",
    "landscaping",
    "turfing",
    "power-washing",
    "hedge-planting-maintenance",
    "garden-waste-removal",
    "weed-control",
    "garden-clearance",
    "grass-cutting-lawn-care",
    "artificial-grass",
  ].map((service) => ({
    url: `${baseUrl}/${service}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Location pages
  const locationPages = [
    "stockport",
    "poynton",
    "hazel-grove",
    "marple",
    "bramhall",
    "woodford",
    "wilmslow",
  ].map((location) => ({
    url: `${baseUrl}/${location}/garden-services`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...mainPages, ...servicePages, ...locationPages];
}
