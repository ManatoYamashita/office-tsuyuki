'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './index.module.scss';

type Props = {
  title: string;
  sub: string;
  imageUrl: string;
};

export default function Hero({ title, sub, imageUrl }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const initAnimationOverlayRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setMounted(true);
    
    // 少し遅延させてから後のアニメーションを開始
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 750); // 0.75秒間オーバーレイを表示
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!animationStarted || !mounted) return;
    
    const tl = gsap.timeline();
    
    // initAnimationOverlayのスライドアウト
    tl.to(initAnimationOverlayRef.current, {
      clipPath: 'inset(0 0 0 100%)',
      duration: 1.4,
      ease: 'power4.inOut',
    });

    // メインオーバーレイのフェードイン (opacity: 1 → 0.5)
    tl.to(overlayRef.current, {
      opacity: 0.5,
      duration: 2,
      ease: 'power4.inOut',
    }, "-=1.5"); // 少し重ねる
    
    // 画像のフェードイン
    tl.to(imageRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
    }, "-=1.8");
    
    // タイトルのフェードイン
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
    }, "-=1.2");
    
    // サブタイトルのフェードイン
    tl.to(subRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.6,
    }, "-=0.6");
    
  }, [animationStarted, mounted]);

  return (
    <section 
      ref={sectionRef} 
      className={`${styles.container} relative`}
    >
      {/* 青色の初期アニメーション用オーバーレイ */}
      <div 
        ref={initAnimationOverlayRef}
        className={styles.initOverlay}
      />
      
      {/* 黒色の背景オーバーレイ */}
      <div 
        ref={overlayRef}
        className={styles.overlay}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)', // 黒色で明示的に設定
          opacity: 1 // 初期は完全に不透明
        }}
      />
      
      <div className="relative z-20">
        <h1 
          ref={titleRef} 
          className={styles.title} 
          style={{ 
            opacity: 0, 
            transform: 'translateY(50px)' 
          }}
        >
          {title}
        </h1>
        <p 
          ref={subRef} 
          className={styles.sub} 
          style={{ 
            opacity: 0, 
            transform: 'translateX(50px)' 
          }}
        >
          {sub}
        </p>
      </div>
      
      {imageUrl ? 
        <Image 
          ref={imageRef}
          className={styles.bgimg} 
          src={imageUrl} 
          alt="heroImage" 
          width={1920} 
          height={600} 
          priority
          quality={70}
          sizes="100vw"
        />
        :
        <Image
          ref={imageRef}
          className={styles.bgimg}
          src="/images/placeholder.webp"
          alt="backgground"
          width={1920}
          height={600}
          priority
          quality={70}
          sizes="100vw"
        />
      }
    </section>
  );
}
