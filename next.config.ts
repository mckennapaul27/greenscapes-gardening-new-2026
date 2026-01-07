import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/artificial-lawn-specialists",
        destination: "/artificial-grass",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
