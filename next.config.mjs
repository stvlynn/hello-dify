import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  turbopack: false,
  images: {
    domains: ['s2.loli.net', 'hellodify.com', 'avatars.githubusercontent.com', 'twimg.com', 'pbs.twimg.com'],
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
        value: "frame-ancestors 'self' *.hellodify.com; frame-src 'self' *.hellodify.com http://*.hellodify.com https://*.hellodify.com https://giscus.app; child-src 'self' *.hellodify.com http://*.hellodify.com https://*.hellodify.com https://giscus.app; img-src 'self' data: *.hellodify.com http://*.hellodify.com https://*.hellodify.com s2.loli.net https://avatars.githubusercontent.com https://twimg.com https://pbs.twimg.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://giscus.app https://www.googletagmanager.com https://www.google-analytics.com; connect-src 'self' https://api.github.com https://www.google-analytics.com https://www.googletagmanager.com https://analytics.google.com;"
      }
    ]
  }
];

export default withMDX(config);
