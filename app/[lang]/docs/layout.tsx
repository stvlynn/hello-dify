import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/app/layout.config';
import type { ReactNode } from 'react';

export default async function Layout({
  children,
  params
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  // 直接从params解构
  const { lang } = params;
  
  // 根据当前语言获取页面树
  const pageTree = source.pageTree[lang] || source.pageTree.en;

  return (
    <DocsLayout 
      {...baseOptions(lang)} 
      tree={pageTree}
    >
      {children}
    </DocsLayout>
  );
} 