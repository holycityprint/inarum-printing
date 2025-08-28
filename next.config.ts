import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  eslint: { ignoreDuringBuilds: true },
  outputFileTracingRoot: __dirname,
  images: { formats: ['image/avif', 'image/webp'] }
}

export default nextConfig