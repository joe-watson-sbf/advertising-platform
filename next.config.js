/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  experimental: {
    appDir: true,
  },
  distDir: 'docs',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: ''
      },
    ],
  },
}

module.exports = nextConfig
