/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mycon.com.br',
        port: '',
        pathname: '/random',
      },
    ],
  },
};

module.exports = nextConfig;
