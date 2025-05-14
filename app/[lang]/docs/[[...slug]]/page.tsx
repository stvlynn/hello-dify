import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';

export default async function Page({
  params
}: {
  params: { slug?: string[]; lang: string }
}) {
  const { slug, lang } = params;
  
  const page = source.getPage(slug, lang);
  
  if (!page) {
    // 尝试查找英文页面作为回退
    const englishPage = lang !== 'en' ? source.getPage(slug, 'en') : null;
    if (englishPage) {
      return renderPage(englishPage);
    }
    
    // 如果都没有找到，返回404
    notFound();
  }
  
  return renderPage(page);
}

// 渲染页面内容
function renderPage(page: any) {
  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({})}
        />
      </DocsBody>
    </DocsPage>
  );
}

// 生成静态参数列表
export async function generateStaticParams() {
  return source.generateParams();
}

// 生成页面元数据
export async function generateMetadata({
  params
}: {
  params: { slug?: string[]; lang: string }
}) {
  const { slug, lang } = params;
  
  const page = source.getPage(slug, lang);
  
  if (!page) {
    // 尝试获取英文页面的元数据
    const englishPage = lang !== 'en' ? source.getPage(slug, 'en') : null;
    if (englishPage) {
      return {
        title: englishPage.data.title,
        description: englishPage.data.description,
      };
    }
    
    notFound();
  }

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

// 使页面静态渲染
export const dynamicParams = false; 