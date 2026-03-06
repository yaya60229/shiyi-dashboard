import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/shiyi-dashboard',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
