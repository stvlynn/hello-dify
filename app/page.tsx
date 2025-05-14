import { redirect } from 'next/navigation';
import { i18n } from '@/lib/i18n';

export default function HomePage() {
  // 默认重定向到英文页面
  // middleware.ts会处理语言检测并重定向到正确的语言
  redirect(`/${i18n.defaultLanguage}`);
} 