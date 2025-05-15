import './global.css';
import 'remixicon/fonts/remixicon.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Hello Dify - 学习和分享Dify最佳实践',
  description: '帮助新手轻松上手Dify的指南与最佳实践',
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  openGraph: {
    title: 'Hello Dify - 学习和分享Dify最佳实践',
    description: '帮助新手轻松上手Dify的指南与最佳实践',
    images: [
      {
        url: '/images/hello-dify.png',
        width: 1200,
        height: 630,
        alt: 'Hello Dify Logo',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hello Dify - 学习和分享Dify最佳实践',
    description: '帮助新手轻松上手Dify的指南与最佳实践',
    images: ['/images/hello-dify.png'],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
