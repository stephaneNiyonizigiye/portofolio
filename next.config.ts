import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/stephaneniyonizigiye/' : '',
  basePath: isProd ? '/stephaneniyonizigiye' : '',
  output: 'export'
};

export default nextConfig;
