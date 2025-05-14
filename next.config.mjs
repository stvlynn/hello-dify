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

config.headers = async () => [
  {
    source: '/(.*)',
    headers: [
      {
        key: 'Content-Security-Policy',
        value: "frame-ancestors 'self' *.hellodify.com; frame-src 'self' *.hellodify.com; child-src 'self' *.hellodify.com;"
      }
    ]
  }
];

export default withMDX(config);
