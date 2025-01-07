/** @type {import('next').NextConfig} */
const nextConfig = {
    // env: {
    //   NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL === "production"
    //   ? "https://pomjp-beta.vercel.app/"
    //   : "http://localhost:3000/",
    // },
    images: {
        domains: ['images.microcms-assets.io'],
      },
};

export default nextConfig;
