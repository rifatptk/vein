/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "robohash.org",
        // port: "",
        // pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
