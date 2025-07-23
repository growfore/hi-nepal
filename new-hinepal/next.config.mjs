/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hinepaltreks.com',
      },
      {
        protocol: 'https',
        hostname: 'api.hinepaltreks.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4017'
      }
    ],
  },
};

export default nextConfig;
