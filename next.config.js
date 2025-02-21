const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development", // Disable PWA in dev mode
  });
  
  /** @type {import('next').NextConfig} */
  const nextConfig = withPWA({
    reactStrictMode: true,
    experimental: {
      appDir: true, // Ensure app directory support
    },
  });
  
  module.exports = nextConfig;
  