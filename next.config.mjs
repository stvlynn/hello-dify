import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      enabled: false
    }
  },
  images: {
    domains: ['s2.loli.net'],
  }
};

export default withMDX(config);
