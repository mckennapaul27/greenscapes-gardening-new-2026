import { readdirSync } from "fs";
import { join } from "path";

// Service folder mappings
const serviceFolderMap: Record<string, string[]> = {
  "artificial-grass": ["artificial-grass", "fake-grass"],
  "garden-clearance": ["garden-clearance"],
  "garden-maintenance": ["garden-maintenance"],
  "garden-waste-removal": ["garden-waste-removal"],
  "grass-cutting-lawn-care": ["grass-cutting-lawn-care"],
  "hedge-services": ["hedge-services"],
  landscaping: ["landscaping"],
  planting: ["planting"],
  "power-washing": ["power-washing"],
  turfing: ["turfing"],
  "weed-control": [],
};

function getImagesFromFolder(folderName: string): string[] {
  try {
    const publicPath = join(process.cwd(), "public", folderName);
    const files = readdirSync(publicPath);

    return files
      .filter((file) => {
        const ext = file.toLowerCase();
        return (
          ext.endsWith(".jpg") ||
          ext.endsWith(".jpeg") ||
          ext.endsWith(".png") ||
          ext.endsWith(".webp")
        );
      })
      .map((file) => `/${folderName}/${file}`)
      .sort();
  } catch (error) {
    // Folder doesn't exist or can't be read
    return [];
  }
}

export function getServiceImages(serviceSlug: string): string[] {
  const folders = serviceFolderMap[serviceSlug] || [];
  const allImages: string[] = [];

  for (const folder of folders) {
    const images = getImagesFromFolder(folder);
    allImages.push(...images);
  }

  return allImages;
}
