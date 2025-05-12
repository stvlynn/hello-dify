"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function HomePage() {
  const logoRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDodging, setIsDodging] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 页面加载后运行入场动画
  useEffect(() => {
    // 短暂延迟以确保页面已完全加载
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // 处理鼠标移动事件
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!logoRef.current) return;
    
    const logoRect = logoRef.current.getBoundingClientRect();
    const logoX = logoRect.left + logoRect.width / 2;
    const logoY = logoRect.top + logoRect.height / 2;
    
    // 计算鼠标与logo的相对位置
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // 计算距离
    const distX = mouseX - logoX;
    const distY = mouseY - logoY;
    const distance = Math.sqrt(distX * distX + distY * distY);
    const maxDistance = 300; // 最大影响距离
    
    // 如果鼠标在影响范围内，计算偏移量
    if (distance < maxDistance) {
      setIsDodging(true);
      // 鼠标越靠近，移动越大，但方向相反（远离鼠标）
      const moveFactorX = (distX / maxDistance) * -1; 
      const moveFactorY = (distY / maxDistance) * -1;
      
      // 设置移动位置，最大移动15px
      const maxMove = 15;
      setMousePos({
        x: moveFactorX * maxMove,
        y: moveFactorY * maxMove
      });
    } else {
      setIsDodging(false);
    }
  };

  // 鼠标离开时重置位置
  const handleMouseLeave = () => {
    setIsDodging(false);
  };

  // 根据鼠标位置计算logo的transform样式
  const logoStyle = {
    transform: isDodging 
      ? `translate(${mousePos.x}px, ${mousePos.y}px)` 
      : 'translate(0, 0)',
    transition: isDodging 
      ? 'transform 0.3s ease-out' 
      : 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
  };

  return (
    <main 
      className="flex flex-1 flex-col items-center justify-center text-center max-w-4xl mx-auto px-4 py-12"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mb-8 relative" ref={logoRef} style={logoStyle}>
        <Image 
          src="/images/hello-dify.png" 
          alt="Hello Dify Logo" 
          width={180} 
          height={180}
          className={`mx-auto transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          priority
        />
      </div>
      
      <h1 
        className={`mb-4 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
          from-blue-500 to-teal-400 transition-all duration-1000 delay-300
          ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        Hello Dify
      </h1>
      
      <p 
        className={`text-fd-muted-foreground mb-10 text-xl max-w-2xl transition-all duration-1000 delay-500
          ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        A FirstLab project designed to help newcomers quickly learn Dify through a series of best practices.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
        <Link
          href="/docs"
          className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full 
            bg-fd-primary text-white hover:bg-fd-primary/90 transition-all duration-1000 delay-700
            text-lg font-medium shadow-md hover:shadow-lg 
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <i className="ri-book-open-line"></i>
          Documentation
        </Link>
        
        <Link
          href="https://discord.gg/drd3HnTv"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full 
            border border-fd-border hover:bg-fd-muted text-lg font-medium 
            transition-all duration-1000 delay-800
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <i className="ri-discord-fill text-indigo-500"></i>
          Join FirstLab Community
        </Link>
      </div>
      
      <div 
        className={`text-fd-muted-foreground text-base max-w-2xl mx-auto 
          border-t border-fd-border pt-8 transition-all duration-1000 delay-900
          ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        Ready to build amazing AI applications with Dify? Start exploring our documentation!
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
