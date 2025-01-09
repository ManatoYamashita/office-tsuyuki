"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Btn from "@/app/_components/Btn";
import Image from "next/image";
import { Suspense } from "react";

import dynamic from 'next/dynamic';
const DotLottieAnimation = dynamic(() => import('@/app/_components/DotLottieAnimation'), { ssr: false });


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

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set(sectionRef.current, {
      opacity: 0
    })

    tl.to(sectionRef.current, {
      opacity: 1,
      duration: .2,
    })

    // 両方のアニメーションを同時に開始
    tl.fromTo(imageRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
    );
    tl.fromTo(imageContentRef.current,
      { scale: 1.5 },
      { scale: 1, duration: 1, ease: "power3.out" },
      "<" // "<" は直前のアニメーションと同時に開始することを示します
    );

    // h1のアニメーション
    tl.fromTo(headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.5"
    );

    // テキストの文字ごとのアニメーション
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

    // ボタンのアニメーション
    tl.fromTo(btnRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
      "-=0.3"
    );
  }, []);

  const mainText = "建築に関するあらゆることをデジタルツールで解決する。";
  const subText = "Solving everything related to architecture using digital tools.";

  return (
    <section ref={sectionRef} className="transition-colors duration-1000 opacity-0">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div ref={imageRef} className="relative overflow-hidden rounded-lg shadow-2xl opacity-0">
            <Image 
              src="/images/fuji.webp" 
              alt="hero image" 
              width={600} 
              height={400}
              loading="eager"
              priority
              className="object-cover w-full h-full"
              quality={80}
              ref={imageContentRef}
            />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12 cpacity-0 y-50">
          <h1 
            ref={headingRef}
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-900"
          >
            オフィス露木
          </h1>
          <p ref={mainTextRef} className="text-xl md:text-2xl mb-8 text-gray-700">
            {splitText(mainText)}
            <br />
            <small className="text-sm md:text-base text-gray-500 mt-2 block">
              {splitText(subText)}
            </small>
          </p>
          <div ref={btnRef}>
            <Btn label="詳しくみる" url="#about" />
          </div>
        </div>
      </div>
      <div className="relative -z-2 w-1/6">
      <Suspense fallback={<div className="w-full h-20" />}>
        <DotLottieAnimation
          src="/lotties/down.lottie"
          className="w-full h-20"
          loop={true}
        />
      </Suspense>
    </div>
    </section>
  );
}

