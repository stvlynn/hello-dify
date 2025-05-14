import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';

export default async function Layout({ 
  children,
  params
}: { 
  children: ReactNode;
  params: { lang: string }
}) {
  const { lang } = params;
  
  // 根据不同语言设置链接文本
  const docText = {
    'cn': '文档',
    'jp': 'ドキュメント',
    'en': 'Documentation'
  }[lang] || 'Documentation';
  
  const githubText = {
    'cn': 'GitHub',
    'jp': 'GitHub',
    'en': 'GitHub'
  }[lang];
  
  const discordText = {
    'cn': 'Discord 社区',
    'jp': 'Discord コミュニティ',
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
