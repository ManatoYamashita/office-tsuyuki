/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io'
      },
      {
        protocol: 'https',
        hostname: 'pomjp-beta.vercel.app'
      },
      {
        protocol: 'https',
        hostname: 'pom.jp'
      }
    ]
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
    optimizeCss: true
  }
};

export default nextConfig;
