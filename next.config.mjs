import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // 禁用Turbopack以解决字体加载问题
  experimental: {
    turbo: false
  }
};

export default withMDX(config);
