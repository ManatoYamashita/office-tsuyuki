// app/_components/PageAnimation.tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function PageAnimation({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      gsap.fromTo(
        '.animate-content > *',
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
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contentRef} className="animate-content">
      {children}
    </div>
  );
}
