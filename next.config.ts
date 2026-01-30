import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'd15f34w2p8l1cc.cloudfront.net' }],
  },
};

export default nextConfig;
