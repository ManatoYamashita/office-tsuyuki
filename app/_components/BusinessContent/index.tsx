"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Btn from '../Btn';
import { AnimationRefs } from './types';
import { createAnimationTimeline } from './animations';
import SecoundaryBtn from '../SecoundaryBtn';
import AutoPlayVideo from '../AutoPlayVideo';

interface BusinessContentProps {
  title: string;
  subtitle: string;
}

export default function BusinessContent({ title, subtitle }: BusinessContentProps) {
  const sectionRef = useRef<HTMLElement>(null);
  
  const refs: AnimationRefs = {
    heading: useRef<HTMLHeadingElement>(null).current,
    subHeading: useRef<HTMLHeadingElement>(null).current,
    textContent: useRef<HTMLDivElement>(null).current,
    buttons: useRef<HTMLDivElement>(null).current,
    video: useRef<HTMLDivElement>(null).current,
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const timeline = createAnimationTimeline(sectionRef.current, refs);

    return () => {
      timeline?.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="container mx-auto space-y-6"
    >
      <div className='w-full flex	flex-col sm:flex-row gap-4'>
        <h1 
          ref={el => refs.heading = el}
          className="whitespace-nowrap text-4xl md:text-5xl font-bold tracking-tighter opacity-0"
        >
          {title}
        </h1>

        <div className='w-full flex	flex-row justify-end gap-4'>
          <SecoundaryBtn 
            label="事業内容の詳細" 
            url="/works" 
          />
          <SecoundaryBtn 
            label="カテゴリ一覧"
            url="/works/category"
          />
          <SecoundaryBtn 
            label="その他の事業"
            url="/works/category/other"
          />
        </div>
      </div>
      
      <h2 
        ref={el => refs.subHeading = el}
        className="text-2xl md:text-3xl text-muted-foreground opacity-0"
      >
        { subtitle }
      </h2>
      
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 space-y-6">
          <p 
            ref={el => refs.textContent = el}
            className="text-lg text-muted-foreground opacity-0"
          >
            建築とコンピュータ利用を中心に幅広く「興味あることはなんでも徹底的にやってみよう」精神で活動しております。従いまして、その業務内容はバラエティに富んでいます。
          </p>
          
          <div 
            ref={el => refs.buttons = el}
            className="flex flex-wrap gap-6 opacity-0"
          >
            <Btn 
              label="建築DX" 
              url="/works/category/fm-dx" 
            />
            <Btn 
              label="建築設計デザイン" 
              url="/works/category/planning-design" 
            />
            <Btn 
              label="建築研究開発コンサル" 
              url="/works/category/research-dev-consulting" 
            />
          </div>
        </div>

        <div 
          ref={el => refs.video = el}
          className="flex-1 w-full relative"
        >
          <div className="aspect-square lg:w-full w-3/4 mx-auto">
            <AutoPlayVideo
              videoSrcWebM="/images/solution.webm"
              videoSrcMp4="/images/solution.mp4"
              imgSrc="/images/solution.webp"
              alt="オフィス露木の事業領域"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
