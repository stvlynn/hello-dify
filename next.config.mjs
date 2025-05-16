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
    domains: ['s2.loli.net', 'hellodify.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.hellodify.com',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: '**.hellodify.com',
        pathname: '**',
      }
    ],
  }
};

config.headers = async () => [
  {
    source: '/(.*)',
    headers: [
      {
        key: 'Content-Security-Policy',
        value: "frame-ancestors 'self' *.hellodify.com; frame-src 'self' *.hellodify.com http://*.hellodify.com https://*.hellodify.com; child-src 'self' *.hellodify.com http://*.hellodify.com https://*.hellodify.com; img-src 'self' data: *.hellodify.com http://*.hellodify.com https://*.hellodify.com s2.loli.net;"
      }
    ]
  }
];

export default withMDX(config);
