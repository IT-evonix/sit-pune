import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/btech-AI",
        destination:
          "/programmes/btech/artificial-intelligence-machine-learning",
      },
    ];
  }
  // async redirects() {
  //   return [
  //     {
  //       source: "/btech-AI",
  //       destination: "/programmes/btech/artificial-intelligence-machine-learning",
  //       permanent: true, // SEO 301 redirect
  //     },
  //   ];
  // }
};

export default nextConfig;
