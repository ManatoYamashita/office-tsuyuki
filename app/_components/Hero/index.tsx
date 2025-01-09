'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
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
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
  
    tl.set(sectionRef.current, {
        visibility: 'visible'
      })
      // 2枚のオーバーレイを使用する場合
      .to(overlayRef.current, {
        clipPath: 'inset(0 0 0 100%)',
        duration: 1.4,
        opacity: 0,
        ease: 'power4.inOut',
      })
      .fromTo(imageRef.current, {
        scale: 1.1,
        opacity: 0,
        duration: 1.2,
      }, {
        scale: 1,
        opacity: 1,
      }, "-=0.8")
      .fromTo(titleRef.current, {
        y: 50,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 1.2,
      }, "-=0.8")
      .fromTo(subRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.8,
      }, {
        x: 0,
        opacity: 1,
      }, "-=0.6");
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`${styles.container} relative invisible`}
    >
      {/* オーバーレイ要素 */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-primary z-10"
        style={{ clipPath: 'inset(0 0 0 0)' }}
      />
      <div className="relative z-20">
        <h1 ref={titleRef} className={styles.title}>{title}</h1>
        <p ref={subRef} className={styles.sub}>{sub}</p>
      </div>
      {imageUrl ? 
        <Image 
          ref={imageRef}
          className={styles.bgimg} 
          src={imageUrl} 
          alt="heroImage" 
          width={4000} 
          height={1200} 
          priority
          quality={70}
        />
        :
        <Image
          ref={imageRef}
          className={styles.bgimg}
          src="/images/placeholder.webp"
          alt="backgground"
          width={4000}
          height={1200}
          priority
          quality={70}
        />
      }
    </section>
  );
}
