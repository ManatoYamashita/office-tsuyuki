// app/_components/PageAnimation.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from "@/app/_libs/utils";

export default function PageAnimation({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
    
    // ブラウザ環境でのみgsapを読み込み
    const loadGsap = async () => {
      try {
        // 動的にgsapをインポート
        const gsapModule = await import('gsap');
        const gsap = gsapModule.default;
        
        const ScrollTriggerModule = await import('gsap/ScrollTrigger');
        const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;
        
        gsap.registerPlugin(ScrollTrigger);
        
        if (contentRef.current) {
          // コンテンツ全体のアニメーション
          gsap.fromTo(
            contentRef.current,
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
            }
          );
  
          // 個別要素のスタッガーアニメーション
          const elements = document.querySelectorAll('.animate-content > *');
          if (elements.length > 0) {
            gsap.fromTo(
              elements,
              {
                opacity: 0,
                y: 30,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
              }
            );
          }
        }
      } catch (error) {
        console.error('GSAPの読み込みに失敗しました:', error);
      }
    };
    
    loadGsap();
  }, []);

  return (
    <div 
      ref={contentRef} 
      className={cn(
        "animate-content",
        !isBrowser && "opacity-100" // サーバーサイドでは透明度100%に
      )}
    >
      {children}
    </div>
  );
}
