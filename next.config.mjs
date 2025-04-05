/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '',
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24, // 24時間
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],  // 必要なサイズのみに制限
    imageSizes: [16, 32, 64, 96, 128, 256],  // 必要なサイズのみに制限
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io'
      },
      {
        protocol: 'https',
        hostname: 'pomjp-tsuyuki.vercel.app'
      },
      {
        protocol: 'https',
        hostname: 'pom.jp'
      }
    ]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(webm|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'videos/[name].[hash].[ext]',
          },
        },
      ],
    });
    return config;
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;