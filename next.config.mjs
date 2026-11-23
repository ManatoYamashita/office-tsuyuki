/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '',
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24, // 24時間
    // 1440 は 1280〜1536px の画面幅で全幅のヒーロー画像に 1920 が選ばれないようにするため
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920],  // 必要なサイズのみに制限
    // 384・512 は表示幅 260〜450px 程度のカード画像に 640 が選ばれないようにするため
    imageSizes: [16, 32, 64, 96, 128, 256, 384, 512],  // 必要なサイズのみに制限
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io'
      },
      {
        protocol: 'https',
        hostname: 'office-tsuyuki.pom.jp'
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