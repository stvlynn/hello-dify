import '../global.css';
import 'remixicon/fonts/remixicon.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import { use } from 'react';
import type { ReactNode } from 'react';
import type { Translations } from 'fumadocs-ui/i18n';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

// 中文翻译
const zh: Partial<Translations> = {
  search: '搜索'
};

// 日语翻译
const ja: Partial<Translations> = {
  search: '検索'
};

// 可用语言配置
const locales = [
  {
    name: 'English',
    locale: 'en',
  },
  {
    name: '中文',
    locale: 'zh',
  },
  {
    name: '日本語',
    locale: 'ja',
  },
];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  // 解析Promise获取语言参数
  const resolvedParams = await params;
  const { lang } = resolvedParams;
  
  // 根据不同语言设置不同的标题和描述
  const titles = {
    en: 'Hello Dify - Dify Tutorials with Best Practice',
    zh: 'Hello Dify - 全网最齐全的免费Dify教程与最佳实践',
    ja: 'Hello Dify - Dify チュートリアルとベストプラクティス'
  };

  const descriptions = {
    en: 'Dify tutorials, guides, and best practices for building AI workflows and applications with Dify',
    zh: 'Dify教程、入门指南与最佳实践，涵盖AI应用与工作流构建',
    ja: 'Difyのチュートリアル、ガイド、ベストプラクティスでAIアプリとワークフローを構築'
  };

  const keywordsMap = {
    en: ['Dify', 'Dify tutorial', 'Dify guide', 'Dify best practices', 'AI workflow', 'AI application'],
    zh: ['Dify', 'Dify教程', 'Dify指南', 'Dify最佳实践', 'AI工作流', 'AI应用'],
    ja: ['Dify', 'Difyチュートリアル', 'Difyガイド', 'Difyベストプラクティス', 'AIワークフロー', 'AIアプリ']
  } as const;

  const locales = {
    en: 'en_US',
    zh: 'zh_CN',
    ja: 'ja_JP'
  };

  const title = titles[lang as keyof typeof titles] || titles.en;
  const description = descriptions[lang as keyof typeof descriptions] || descriptions.en;
  const keywords = keywordsMap[lang as keyof typeof keywordsMap] || keywordsMap.en;
  const locale = locales[lang as keyof typeof locales] || locales.en;

  return {
    title,
    description,
    keywords,
    icons: {
      icon: '/images/favicon.png',
      apple: '/images/favicon.png',
    },
    openGraph: {
      title,
      description,
      images: [
        {
          url: '/images/hello-dify.png',
          width: 1200,
          height: 630,
          alt: 'Hello Dify Logo',
        },
      ],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/hello-dify.png'],
    },
  };
}

export default function Layout({ 
  children,
  params 
}: { 
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = use(params);
  const { lang } = resolvedParams;
  
  // 根据语言选择翻译
  const translations = {
    zh,
    ja
  }[lang];

  return (
    <RootProvider
      i18n={{
        locale: lang,
        locales,
        translations
      }}
    >
      {children}
    </RootProvider>
  );
}
