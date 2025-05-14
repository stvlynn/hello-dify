import '../global.css';
import 'remixicon/fonts/remixicon.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Translations } from 'fumadocs-ui/i18n';

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

export default async function Layout({ 
  children,
  params 
}: { 
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  // 使用await解构params
  const resolvedParams = await params;
  const { lang } = resolvedParams;
  
  // 根据语言选择翻译
  const translations = {
    zh,
    ja
  }[lang];

  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <RootProvider
          i18n={{
            locale: lang,
            locales,
            translations
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
