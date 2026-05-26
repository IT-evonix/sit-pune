/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  
   async rewrites() {
    return [       
        { // B.Tech
        source: "/btech-AI",
        destination:
          "/programmes/btech/artificial-intelligence-machine-learning",
      },
    ]
   }

  //  async redirects() {
  //   return [
  //     {
  //       source: "/btech-AI",
  //       destination: "/programmes/btech/artificial-intelligence-machine-learning",
  //       permanent: true, // SEO 301 redirect
  //     },
  //   ];
  // }


};

module.exports = nextConfig;