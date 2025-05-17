import React, { ReactNode } from 'react';
import { DocsPage, DocsPageProps } from 'fumadocs-ui/page';
import { AuthorInfo, AuthorInfoProps } from './AuthorInfo';

export interface CustomDocsPageProps extends DocsPageProps {
  authorInfo?: AuthorInfoProps;
}

export default function CustomDocsPage({
  children,
  authorInfo,
  ...props
}: CustomDocsPageProps) {
  // 自定义TOC选项，在TOC头部添加作者信息
  const customTocOptions = authorInfo ? {
    ...props.tableOfContent,
    header: (
      <div className="mb-6">
        <AuthorInfo {...authorInfo} />
      </div>
    )
  } : props.tableOfContent;

  return (
    <DocsPage 
      {...props}
      tableOfContent={customTocOptions}
    >
      {children}
    </DocsPage>
  );
} 