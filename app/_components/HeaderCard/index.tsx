"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import TitleCard from "./TitleCard";

const MOBILE_BREAKPOINT = 768;

export default function HeaderCard() {
  const [isMobile, setIsMobile] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 初期表示のアニメーション
    gsap.fromTo(elementRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
      }
    );

    // 画面幅でのモバイル判定
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // 初回チェック
    checkIfMobile();

    // リサイズ時の判定更新
    window.addEventListener('resize', checkIfMobile);

    const update = ({ x, y }: MouseEvent) => {
      if (isMobile) return;

      gsap.set(document.documentElement, {
        "--x": gsap.utils.mapRange(0, window.innerWidth, -1, 1, x),
        "--y": gsap.utils.mapRange(0, window.innerHeight, -1, 1, y),
      });
    };

    window.addEventListener("mousemove", update);

    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [isMobile]);

  if (isMobile) {
    return (
      <div 
        ref={elementRef}
        style={{
          opacity: 0,
          transform: 'translateY(100px)',
          width: '100%',
          height: '100%',
          position: 'relative'
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'relative',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        >
          <source src="/images/tsuyuki-video.webm" type="video/webm" />
        </video>
      </div>
    );
  }

  return (
    <div 
      ref={elementRef}
      style={{
        opacity: 0,
        transform: 'translateY(100px)',
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TitleCard />
    </div>
  );
}
