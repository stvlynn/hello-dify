import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  turbopack: false,
  images: {
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
      },
      {
        protocol: 'https',
        hostname: '**.github.io',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 's2.loli.net',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**.twimg.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**.pbs.twimg.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**.youtube.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**.ytimg.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'youtube.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.youtube.com',
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
        value: "frame-ancestors 'self' *.hellodify.com; frame-src 'self' *.hellodify.com http://*.hellodify.com https://*.hellodify.com https://giscus.app https://www.youtube.com https://*.youtube.com; child-src 'self' *.hellodify.com http://*.hellodify.com https://*.hellodify.com https://giscus.app https://www.youtube.com https://*.youtube.com; img-src 'self' data: *.hellodify.com http://*.hellodify.com https://*.hellodify.com s2.loli.net https://avatars.githubusercontent.com https://twimg.com https://pbs.twimg.com https://*.github.io https://*.youtube.com https://*.ytimg.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://giscus.app https://www.googletagmanager.com https://www.google-analytics.com; connect-src 'self' https://api.github.com https://www.google-analytics.com https://www.googletagmanager.com https://analytics.google.com;"
      }
    ]
  }
];

export default withMDX(config);
