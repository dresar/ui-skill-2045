import type { NextConfig } from "next";

const basePath = "/ui-skill-2045";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: `${basePath}/`,
  reactStrictMode: true,
};

export default nextConfig;
