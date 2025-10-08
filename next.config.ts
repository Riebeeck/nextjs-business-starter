import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Next.js configuration options */
  
  // Uncomment to enable standalone output for Docker deployments
  // output: 'standalone',
  
  // Uncomment to add custom image domains
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'example.com',
  //     },
  //   ],
  // },
  
  // Uncomment to add redirects
  // async redirects() {
  //   return [
  //     {
  //       source: '/old-page',
  //       destination: '/new-page',
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
