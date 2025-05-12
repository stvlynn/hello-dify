import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // 禁用Turbopack以解决字体加载问题
  experimental: {
    turbo: false
  },
  images: {
    domains: ['s2.loli.net'],
  }
};

export default withMDX(config);
