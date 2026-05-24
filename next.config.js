/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/apexmarve_website',
  assetPrefix: '/apexmarve_website/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
