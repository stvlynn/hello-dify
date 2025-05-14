import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';

export default async function Layout({ 
  children,
  params
}: { 
  children: ReactNode;
  params: Promise<{ lang: string }>
}) {
  // 使用await解构params
  const resolvedParams = await params;
  const { lang } = resolvedParams;
  
  // 根据不同语言设置链接文本
  const docText = {
    'zh': '文档',
    'ja': 'ドキュメント',
    'en': 'Documentation'
  }[lang] || 'Documentation';
  
  const githubText = {
    'zh': 'GitHub',
    'ja': 'GitHub',
    'en': 'GitHub'
  }[lang];
  
  const discordText = {
    'zh': 'Discord 社区',
    'ja': 'Discord コミュニティ',
    'en': 'Discord'
  }[lang] || 'Discord';

  return (
    <HomeLayout
      {...baseOptions(lang)}
      links={[
        {
          text: docText,
          url: `/${lang}/docs`,
        },
        {
          text: githubText,
          url: 'https://github.com/stvlynn/hello-dify',
          external: true,
        },
        {
          text: discordText,
          url: 'https://discord.gg/drd3HnTv',
          external: true,
        },
      ]}
    >
      {children}
    </HomeLayout>
  );
}
