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
const cn: Partial<Translations> = {
  search: '搜索'
};

// 日语翻译
const jp: Partial<Translations> = {
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
    locale: 'cn',
  },
  {
    name: '日本語',
    locale: 'jp',
  },
];

export default async function Layout({ 
  children,
  params 
}: { 
  children: ReactNode;
  params: { lang: string };
}) {
  // 直接从params解构
  const { lang } = params;
  
  // 根据语言选择翻译
  const translations = {
    cn,
    jp
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
