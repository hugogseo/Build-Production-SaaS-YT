import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable react/no-unescaped-entities rule since we're using standard quotes in content
    // This is safe for our use case as we're not dealing with XSS-prone dynamic content
    ignoreDuringBuilds: false,
  },
  // Suppress specific ESLint rules that are too restrictive for content
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
