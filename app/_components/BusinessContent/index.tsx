"use client";   

import { useEffect, useRef } from 'react';
import NeumorficButton from '../NeumorphicButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function BusinessContent() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLHeadingElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        // markers: true, // デバッグ用
      }
    });

    // メインヘッディングのアニメーション
    tl.fromTo(headingRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    // サブヘッディングのアニメーション
    tl.fromTo(subHeadingRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.6"
    );

    // テキストコンテンツのアニメーション
    tl.fromTo(textContentRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // ボタングループのアニメーション
    tl.fromTo(buttonsRef.current,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // 動画セクションのアニメーション
    tl.fromTo(videoRef.current,
      {
        x: 50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: .5,
        ease: "power3.out",
      },
      "-=0.8"
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="space-y-6 container mx-auto px-4 py-12 md:py-24"
    >
      <h1 
        ref={headingRef}
        className="text-4xl md:text-5xl font-bold tracking-tighter"
        style={{ opacity: 0 }}
      >
        建築DXソリューション
      </h1>
      <h2 
        ref={subHeadingRef}
        className="text-2xl md:text-3xl text-muted-foreground"
        style={{ opacity: 0 }}
      >
        興味あることはなんでも徹底的に
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 space-y-6">
          <p 
            ref={textContentRef}
            className="text-lg text-muted-foreground"
            style={{ opacity: 0 }}
          >
            建築とコンピュータ利用を中心に幅広く「興味あることはなんでも徹底的にやってみよう」精神で活動しております。従いまして、その業務内容はバラエティに富んでいます。
          </p>
          <div 
            ref={buttonsRef}
            className="flex flex-wrap gap-4"
            style={{ opacity: 0 }}
          >
            <NeumorficButton label="建築設計デザイン" url="/" />
            <NeumorficButton label="建築研究開発コンサル" url="/" />
            <NeumorficButton label="建築DX" url="/" />
          </div>
        </div>
        <div 
          ref={videoRef}
          className="flex-1 w-full relative"
          style={{ opacity: 0 }}
        >
          <div className="aspect-w-1 aspect-h-1 lg:w-full lg:max-w-full w-3/4 max-w-3/4 mx-auto">
            <video
              src="/images/solutions_triangle.webm"
              title="革新的なソリューションのイメージ"
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
