import type { MetadataRoute } from 'next';
import { i18n } from '@/lib/i18n';

// 获取基本URL，根据环境变量设置或默认为本地开发URL
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://hellodify.com';

// 确保 BASE_URL 包含协议前缀
function formatBaseUrl(url: string): string {
  // 如果URL已经包含协议前缀，直接返回
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  
  // 如果是本地开发环境
  if (url.includes('localhost')) {
    return `http://${url}`;
  }
  
  // 默认添加https前缀
  return `https://${url}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // 支持的语言
  const languages = i18n.languages;
  const defaultLanguage = i18n.defaultLanguage;
  
  // 格式化基本URL
  const formattedBaseUrl = formatBaseUrl(BASE_URL);
  
  // 基本路由
  const routes = [
    // 主页
    '',
    // 文档主页
    '/docs',
    // 快速开始
    '/docs/quickstart',
    // 贡献指南
    '/docs/contributing',
    // Workflow 相关
    '/docs/workflow',
    '/docs/workflow/workflow-chatflow-difference',
    '/docs/workflow/twitter-mbti-receipt',
    // Knowledge Base 相关
    '/docs/knowledge-base/image-retrieval',
    // Plugin 相关
    '/docs/plugin',
    '/docs/plugin/ssh-plugin-vibe-coding',
    '/docs/plugin/cursor-rules'
  ];
  
  // 创建包含所有语言版本的站点地图条目
  const sitemapEntries: MetadataRoute.Sitemap = [];
  
  // 为每个路由创建条目
  routes.forEach(route => {
    // 当前路由的所有语言版本
    const languageAlternates: Record<string, string> = {};
    
    // 为每种语言创建备用URL
    languages.forEach(lang => {
      const langPath = `/${lang}${route}`;
      languageAlternates[lang] = `${formattedBaseUrl}${langPath}`;
    });
    
    // 为默认语言创建主条目
    const mainRoute = `/${defaultLanguage}${route}`;
    
    // 创建站点地图条目
    const sitemapEntry: MetadataRoute.Sitemap[number] = {
      url: `${formattedBaseUrl}${mainRoute}`,
      lastModified: new Date(),
      priority: route === '' ? 1.0 : 
               route === '/docs' ? 0.9 : 
               route === '/docs/quickstart' ? 0.8 : 0.7
    };

    // 根据路由类型设置更新频率
    if (route === '') {
      sitemapEntry.changeFrequency = 'daily';
    } else {
      sitemapEntry.changeFrequency = 'weekly';
    }

    // 添加语言备用链接
    sitemapEntry.alternates = {
      languages: languageAlternates
    };
    
    sitemapEntries.push(sitemapEntry);
  });
  
  return sitemapEntries;
}