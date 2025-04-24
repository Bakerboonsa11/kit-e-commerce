import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['via.placeholder.com', 'www.freepik.com'],
  },
  eslint: {
    ignoreDuringBuilds: true, // 🚫 Skip ESLint errors during build
  },
};

export default nextConfig;
