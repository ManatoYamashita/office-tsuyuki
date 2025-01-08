/** @type {import('next').NextConfig} */
const nextConfig = {
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
  }
};

export default nextConfig;
