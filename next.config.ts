import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/rakshit-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
