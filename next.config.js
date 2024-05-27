/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  distDir: "build",
  cleanDistDir: true,
  optimizeFonts: true,
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
