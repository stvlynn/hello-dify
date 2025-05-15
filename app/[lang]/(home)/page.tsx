import Link from 'next/link';
import Image from 'next/image';

// 多语言文本内容
const texts = {
  en: {
    title: "Hello Dify",
    description: "The most comprehensive online Dify tutorial, powered by FirstLab.",
    documentation: "Documentation",
    joinCommunity: "Join FirstLab Community",
    readyToStart: "Ready to build amazing AI applications with Dify? Start exploring our documentation!"
  },
  zh: {
    title: "Hello Dify",
    description: "最全面的 Dify 在线教程, 由 FirstLab 驱动",
    documentation: "文档",
    joinCommunity: "加入 FirstLab 社区",
    readyToStart: "准备使用 Dify 构建出色的 AI 应用程序？开始探索我们的文档吧！"
  },
  ja: {
    title: "Hello Dify",
    description: "FirstLab が提供する、最も充実した Dify オンラインチュートリアルです。",
    documentation: "ドキュメント",
    joinCommunity: "FirstLab コミュニティに参加",
    readyToStart: "Dify で素晴らしい AI アプリケーションを構築する準備はできましたか？ドキュメントの探索を始めましょう！"
  }
};

export default async function HomePage({ 
  params 
}: { 
  params: Promise<{ lang: string }> 
}) {
  // 等待解析params
  const resolvedParams = await params;
  const { lang } = resolvedParams;
  const t = texts[lang as keyof typeof texts] || texts.en;

  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8 relative">
        <Image 
          src="/images/hello-dify.png" 
          alt="Hello Dify Logo" 
          width={180} 
          height={180}
          className="mx-auto opacity-100"
          priority
        />
      </div>
      
      <h1 className="mb-4 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
        {t.title}
      </h1>
      
      <p className="text-fd-muted-foreground mb-10 text-xl max-w-2xl">
        {t.description}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
        <Link
          href={`/${lang}/docs`}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full 
            bg-fd-primary text-white hover:bg-fd-primary/90 dark:text-black dark:hover:text-black 
            text-lg font-medium shadow-md hover:shadow-lg"
        >
          <i className="ri-book-open-line"></i>
          {t.documentation}
        </Link>
        
        <Link
          href="https://discord.gg/drd3HnTv"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full 
            border border-fd-border hover:bg-fd-muted text-lg font-medium"
        >
          <i className="ri-discord-fill text-indigo-500"></i>
          {t.joinCommunity}
        </Link>
      </div>
      
      <div className="text-fd-muted-foreground text-base max-w-2xl mx-auto border-t border-fd-border pt-8">
        {t.readyToStart}
      </div>
    </main>
  );
}

// 声明全局变量用于存储anime函数引用
declare global {
  interface Window {
    __anime?: any;
  }
}
