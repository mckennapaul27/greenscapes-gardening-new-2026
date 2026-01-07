import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/artificial-lawn-specialists",
        destination: "/artificial-grass",
        permanent: true,
      },
      {
        source: "/local-tree-surgeon",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tree-surgeon-bramhall",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tree-surgeon-cheadle",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tree-surgeon-wilmslow",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/how-to-deadhead-an-astilbe",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/winter-garden-maintenance",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/domestic-garden-maintenance-wilmslow",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/garden-maintenance-service-wilmslow",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
