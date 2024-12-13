"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./index.module.scss";
import NeumorficButton from "@/app/_components/NeumorphicButton";
import HeaderCard from "@/app/_components/HeaderCard";

// テキストを1文字ずつ分割するユーティリティ関数
const splitText = (text: string) => {
  return text.split('').map((char, index) => (
    <span 
      key={index} 
      style={{ 
        display: 'inline-block',
        opacity: 0,
        transform: 'translateY(20px)'
      }}
    >
      {char}
    </span>
  ));
};

export default function HeroSection() {
  const mainTextRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
//   const heroSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // ヘッダーカードのアニメーション
    // tl.fromTo(heroSectionRef.current,
    //   {
    //     y: 100,
    //     opacity: 0,
    //   },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     duration: 1.2,
    //     ease: "power3.out",
    //   },
    // );

    // h1のアニメーション
    tl.fromTo(headingRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      },
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
        }, `-=0.03`); // 各文字のアニメーションを少しずつ重ねる
      });
    }
  }, []);

  const mainText = "建築に関するあらゆることをデジタルツールで解決する。";
  const subText = "Solving everything related to architecture using digital tools.";

  return (
    <section className={`${styles.heroSection} ${styles.banner} ${styles['banner-section']} max-w-4xl`}>
      <div className={`${styles.container} ${styles['banner-column']}`}>
        <section 
          className={styles['banner-image']}
          style={{ overflow: 'hidden' }}
        >
          {/* <div ref={heroSectionRef} style={{ opacity: 1, transform: 'translateY(0)' }}> */}
            <HeaderCard />
          {/* </div> */}
        </section>
        <div className={styles['banner-inner']}>
          <h1 
            ref={headingRef}
            className={styles['heading-xl']}
            style={{ opacity: 0, transform: 'translateY(50px)' }}
          >
            オフィス露木
          </h1>
          <p ref={mainTextRef} className={styles.paragraph}>
            {splitText(mainText)}
            <br />
            <small style={{ display: 'inline-block', opacity: 0 }}>
              {splitText(subText)}
            </small>
          </p>
          <NeumorficButton label="詳しくみる" url="/about" />
        </div>
      </div>
    </section>
  );
}