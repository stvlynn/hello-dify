import { i18n } from '@/lib/i18n';
import { NextRequest, NextResponse } from 'next/server';

// 创建基于Fumadocs的i18n中间件
export function middleware(request: NextRequest) {
  // 提取当前路径
  const pathname = request.nextUrl.pathname;
  
  // 如果路径已经有语言前缀，则不做任何更改
  if (/^\/(en|ja|zh)($|\/)/.test(pathname)) {
    return;
  }

  // 排除不需要处理的路径
  if (
    pathname.startsWith('/api/') || 
    pathname.startsWith('/public/') ||
    /\.(jpg|png|svg|gif)$/.test(pathname)
  ) {
    return;
  }

  // 从请求的Accept-Language头中获取首选语言
  const acceptLanguage = request.headers.get('Accept-Language') || '';
  
  // 检测用户首选语言
  let locale = 'en'; // 默认英语
  
  if (acceptLanguage.includes('zh')) {
    locale = 'zh';
  } else if (acceptLanguage.includes('ja')) {
    locale = 'ja';
  }
  
  // 创建重定向URL
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  
  // 使用NextResponse创建响应并设置cookie
  const response = NextResponse.redirect(url);
  
  // 设置cookie以记住用户语言选择
  response.cookies.set('NEXT_LOCALE', locale, { 
    path: '/', 
    maxAge: 31536000 // 一年有效期
  });
  
  return response;
}

// 配置匹配路径
export const config = {
  // 匹配所有路径，但排除_next、static等
  matcher: ['/((?!_next|static|favicon.ico|.*\\.(?:jpg|png|svg|gif)).*)']
}; 