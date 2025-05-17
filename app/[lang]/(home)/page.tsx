'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { use } from 'react';

// 多语言文本内容
const texts = {
  en: {
    title: "Hello Dify",
    description: "The most comprehensive online Dify tutorial, powered by FirstLab.",
    documentation: "Documentation",
    joinCommunity: "Join FirstLab Community",
    readyToStart: "Ready to build amazing AI applications with Dify? Start exploring our documentation!",
    scrollDown: "Scroll Down",
    // 第二屏文本
    features: "Features",
    openSource: {
      title: "Open Source",
      description: "Free and open source. Community driven development.",
      link: "Visit GitHub Repository"
    },
    community: {
      title: "Community Building",
      description: "Join the community to learn and contribute.",
      link: "Join FirstLab Community"
    },
    beginner: {
      title: "Start From Zero",
      description: "Solving the steep learning curve of Dify."
    },
    interactive: {
      title: "Interactive Documentation",
      description: "Try demos in real-time while reading documentation."
    },
    // 页脚文本
    contact: "Contact",
    friendLink: "Friend Link",
    license: "CC-BY-SA-4.0 license"
  },
  zh: {
    title: "Hello Dify",
    description: "最全面的 Dify 在线教程, 由 FirstLab 驱动",
    documentation: "文档",
    joinCommunity: "加入 FirstLab 社区",
    readyToStart: "准备使用 Dify 构建出色的 AI 应用程序？开始探索我们的文档吧！",
    scrollDown: "向下滚动",
    // 第二屏文本
    features: "特色功能",
    openSource: {
      title: "免费开源",
      description: "完全免费且开源，由社区驱动开发。",
      link: "访问GitHub仓库"
    },
    community: {
      title: "社区共建",
      description: "加入社区学习并贡献自己的力量。",
      link: "访问FirstLab社区"
    },
    beginner: {
      title: "从零开始",
      description: "解决了Dify学习曲线陡峭的问题。"
    },
    interactive: {
      title: "文档交互",
      description: "文档中的demo可以实时交互，在读之前可以先上手玩。"
    },
    // 页脚文本
    contact: "联系我们",
    friendLink: "友情链接",
    license: "CC-BY-SA-4.0 许可证"
  },
  ja: {
    title: "Hello Dify",
    description: "FirstLab が提供する、最も充実した Dify オンラインチュートリアルです。",
    documentation: "ドキュメント",
    joinCommunity: "FirstLab コミュニティに参加",
    readyToStart: "Dify で素晴らしい AI アプリケーションを構築する準備はできましたか？ドキュメントの探索を始めましょう！",
    scrollDown: "スクロールダウン",
    // 第二屏文本
    features: "特徴",
    openSource: {
      title: "オープンソース",
      description: "無料でオープンソース。コミュニティ主導の開発。",
      link: "GitHubリポジトリを訪問"
    },
    community: {
      title: "コミュニティ構築",
      description: "コミュニティに参加して学び、貢献しましょう。",
      link: "FirstLabコミュニティに参加"
    },
    beginner: {
      title: "ゼロからスタート",
      description: "Difyの急な学習曲線の問題を解決します。"
    },
    interactive: {
      title: "インタラクティブドキュメント",
      description: "ドキュメントを読みながらリアルタイムでデモを試せます。"
    },
    // 页脚文本
    contact: "お問い合わせ",
    friendLink: "友好リンク",
    license: "CC-BY-SA-4.0 ライセンス"
  }
};

export default function HomePage({ 
  params 
}: { 
  params: Promise<{ lang: string }> 
}) {
  const resolvedParams = use(params);
  const { lang } = resolvedParams;
  const t = texts[lang as keyof typeof texts] || texts.en;

  // 根据不同语言设置链接文本
  const docText = {
    'zh': '开始使用',
    'ja': '始めましょう',
    'en': 'Get Started'
  }[lang] || 'Get Started';

  return (
    <>
      <main className="flex flex-1 flex-col items-center text-center">
        {/* 第一屏 - 首页 */}
        <section className="min-h-screen w-full flex flex-col items-center justify-center max-w-4xl mx-auto px-4 py-12 relative">
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
              {docText}
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

          {/* 向下箭头 */}
          <div className="absolute bottom-8 animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <span className="text-fd-muted-foreground text-sm">{t.scrollDown}</span>
              <i className="ri-arrow-down-line text-2xl text-fd-muted-foreground"></i>
            </div>
          </div>
        </section>

        {/* 第二屏 - 特点介绍 */}
        <section className="min-h-screen w-full flex flex-col items-center justify-center max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            {t.features}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* 卡片 1: 免费开源 */}
            <div className="bg-fd-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-fd-border text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-lg">
                  <i className="ri-github-fill text-2xl text-blue-500"></i>
                </div>
                <h3 className="text-xl font-semibold">{t.openSource.title}</h3>
              </div>
              <p className="text-fd-muted-foreground mb-4">{t.openSource.description}</p>
              <Link 
                href="https://github.com/stvlynn/hello-dify" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-fd-primary font-medium hover:underline"
              >
                {t.openSource.link}
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>

            {/* 卡片 2: 社区共建 */}
            <div className="bg-fd-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-fd-border text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 dark:bg-purple-900/40 p-3 rounded-lg">
                  <i className="ri-team-fill text-2xl text-purple-500"></i>
                </div>
                <h3 className="text-xl font-semibold">{t.community.title}</h3>
              </div>
              <p className="text-fd-muted-foreground mb-4">{t.community.description}</p>
              <Link 
                href="https://discord.gg/drd3HnTv" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-fd-primary font-medium hover:underline"
              >
                {t.community.link}
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>

            {/* 卡片 3: 从零开始 */}
            <div className="bg-fd-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-fd-border text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded-lg">
                  <i className="ri-rocket-line text-2xl text-green-500"></i>
                </div>
                <h3 className="text-xl font-semibold">{t.beginner.title}</h3>
              </div>
              <p className="text-fd-muted-foreground">{t.beginner.description}</p>
            </div>

            {/* 卡片 4: 文档交互 */}
            <div className="bg-fd-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-fd-border text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-100 dark:bg-amber-900/40 p-3 rounded-lg">
                  <i className="ri-code-box-line text-2xl text-amber-500"></i>
                </div>
                <h3 className="text-xl font-semibold">{t.interactive.title}</h3>
              </div>
              <p className="text-fd-muted-foreground">{t.interactive.description}</p>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-fd-card border-t border-fd-border py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* 联系信息和友情链接 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* 第一列：联系方式 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.contact}</h3>
              <ul className="space-y-3 text-fd-muted-foreground">
                <li className="flex items-center gap-2">
                  <i className="ri-mail-line text-lg"></i>
                  <a href="mailto:hello@1st.ac.cn" className="hover:text-fd-primary hover:underline">hello@1st.ac.cn</a>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-twitter-x-line text-lg"></i>
                  <a href="https://twitter.com/FirstLabAI" target="_blank" rel="noopener noreferrer" className="hover:text-fd-primary hover:underline">@FirstLabAI</a>
                </li>
              </ul>
            </div>
            
            {/* 第二列：友情链接 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.friendLink}</h3>
              <ul className="space-y-3 text-fd-muted-foreground">
                <li className="flex items-center gap-2">
                  <i className="ri-link text-lg"></i>
                  <a href="https://hello-ctf.com/" target="_blank" rel="noopener noreferrer" className="hover:text-fd-primary hover:underline">Hello-CTF</a>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-link text-lg"></i>
                  <a href="https://dify101.com/" target="_blank" rel="noopener noreferrer" className="hover:text-fd-primary hover:underline">Dify101</a>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-link text-lg"></i>
                  <a href="https://1st.ac.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-fd-primary hover:underline">FirstLab</a>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-link text-lg"></i>
                  <a href="https://github.com/WorkWorkLabs/Web3-Recruitment-Platform" target="_blank" rel="noopener noreferrer" className="hover:text-fd-primary hover:underline">WorkWork</a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* 分隔线 */}
          <div className="border-t border-fd-border pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* 作者信息 */}
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <Image 
                  src="https://s2.loli.net/2025/05/16/pHlugt6BPKJEzGW.jpg" 
                  alt="Steven Lynn" 
                  width={48} 
                  height={48} 
                  className="rounded-full border border-fd-border"
                />
                <div>
                  <p className="font-medium">Steven Lynn</p>
                  <div className="flex items-center gap-3 text-fd-muted-foreground text-sm">
                    <a href="https://twitter.com/Stv_Lynn" target="_blank" rel="noopener noreferrer" className="hover:text-fd-primary flex items-center gap-1">
                      <i className="ri-twitter-x-line text-lg"></i>
                    </a>
                    <a href="https://github.com/stvlynn" target="_blank" rel="noopener noreferrer" className="hover:text-fd-primary flex items-center gap-1">
                      <i className="ri-github-line text-lg"></i>
                    </a>
                    <a href="https://www.buymeacoffee.com/stvlynn" target="_blank" rel="noopener noreferrer" className="hover:text-fd-primary flex items-center gap-1">
                      <i className="ri-cup-line text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* 许可证信息 */}
              <div className="text-fd-muted-foreground text-sm">
                {t.license}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

// 声明全局变量用于存储anime函数引用
declare global {
  interface Window {
    __anime?: any;
  }
}
