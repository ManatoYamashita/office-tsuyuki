"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Btn from "@/app/_components/Btn";
import Image from "next/image";
import { Suspense } from "react";
import styles from './index.module.scss';

const splitText = (text: string) => {
  return text.split('').map((char, index) => (
    <span 
      key={index} 
      className={`inline-block opacity-0 translate-y-5 ${char === ' ' ? 'w-[0.25em]' : ''}`}
    >
      {char}
    </span>
  ));
};

export default function Firstview() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const mainTextRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageContentRef = useRef<HTMLImageElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const tl = gsap.timeline();

    tl.to(sectionRef.current, {
      opacity: 1,
      duration: .2,
    });

    tl.fromTo(imageRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
    );
    tl.fromTo(".hero-image",
      { scale: 1.5 },
      { scale: 1, duration: 1, ease: "power3.out" },
      "<"
    );

    tl.fromTo(headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.5"
    );

    const chars = mainTextRef.current?.querySelectorAll('span');
    if (chars) {
      chars.forEach((char, index) => {
        tl.to(char, {
          opacity: 1,
          y: 0,
          duration: 0.05,
          ease: "power3.out",
        }, `-=0.03`);
      });
    }

    tl.fromTo(btnRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
      "-=0.3"
    );
  }, [mounted]);

  const mainText = "建築に関するあらゆることをデジタルツールで解決する。";
  const subText = "Solving everything related to architecture using digital tools.";

  return (
    <section 
      ref={sectionRef} 
      className={`bg-slate-50 transition-colors duration-1000 min-h-screen flex flex-col items-center ${!mounted ? styles.hidden : ''}`}
      style={{ opacity: mounted ? 1 : 0 }}
    >
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="text-center max-w-3xl mx-auto relative">
          <div ref={imageRef} className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 z-10 overflow-hidden rounded-xl shadow-2xl w-32 h-32 bg-gradient-to-br from-primary/40 via-blue-400/30 to-primary/20">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-blue-500/30 rounded-xl"></div>
            <Image 
              src="/images/fuji.webp" 
              alt="hero image" 
              width={128}
              height={128}
              loading="eager"
              priority
              className="hero-image w-full h-full object-cover mix-blend-overlay"
            />
          </div>
          
          <h1 
            ref={headingRef}
            className="text-6xl md:text-9xl font-extrabold mb-6 text-gray-900 leading-tight"
          >
            OFFICE<br /><span className="text-primary">TSUYUKI.</span>
          </h1>
          <p ref={mainTextRef} className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed mx-auto">
            {mounted ? splitText(mainText) : <span className="opacity-0">建築に関するあらゆることをデジタルツールで解決する。</span>}
            <br />
            <small className="text-sm md:text-base text-gray-500 mt-4 block">
              {mounted ? splitText(subText) : <span className="opacity-0">Solving everything related to architecture using digital tools.</span>}
            </small>
          </p>
          
          <div ref={btnRef} className="flex justify-center mt-10">
            <Btn label="詳しくみる" url="#about" />
          </div>
        </div>
      </div>
    </section>
  );
}

