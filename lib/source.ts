import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createElement, ReactElement } from 'react';
import 'remixicon/fonts/remixicon.css';

// 图标处理器函数，将图标名称转换为JSX元素
const iconHandler = (icon: string | undefined): ReactElement | undefined => {
  if (!icon) return undefined;
  
  // 使用Remixicon的CSS类实现
  return createElement('i', {
    className: `ri-${icon} ri-lg`
  });
};

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  icon: iconHandler, // 添加图标处理器
});
