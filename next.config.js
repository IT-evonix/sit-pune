/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
    ],
  },

  async rewrites() {
    return [
      {
        // B.Tech
        source: "/btech-AI",
        destination:
          "/programmes/btech/artificial-intelligence-machine-learning",
      },
    ];
  },
};

module.exports = nextConfig;