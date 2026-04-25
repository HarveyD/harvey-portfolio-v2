/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  sassOptions: {
    implementation: "sass",
  },
};

module.exports = nextConfig;
