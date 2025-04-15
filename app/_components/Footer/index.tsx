"use client";

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import dynamic from 'next/dynamic';

const AutoPlayVideo = dynamic(() => import('../AutoPlayVideo'), {
  ssr: false,
  loading: () => <div className="bg-grey" />
});


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  // 年を固定値として設定
  const currentYear = "2024";

  useEffect(() => {
    setMounted(true);

    const animation = () => {
      // Black background slides up
      gsap.fromTo(
        ".footer-section",
        { y: 100 },
        {
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".footer-section",
            start: "top bottom",
            toggleActions: "play none none none",
          },
        }
      );

      // Logo and h3 elements staggered appearance
      gsap.fromTo(
        [".footer-section .text-2xl", ".footer-section h3"],
        { opacity: 0, y: 50 },
        {
          delay: .5,
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.4,
          scrollTrigger: {
            trigger: ".footer-section",
            start: "top bottom",
          },
        }
      );

      // ul list items and SNS icons staggered appearance
      gsap.fromTo(
        [".footer-section ul li", ".footer-section .flex.space-x-6 button"],
        { opacity: 0, y: 20 },
        {
          delay: .6,
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".footer-section",
            start: "top bottom",
          },
        }
      );

      // Peace of Mind slide in
      gsap.fromTo(
        ".footer-section .text-8xl",
        { x: -1500 },
        {
          delay: .5,
          x: 0,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".footer-section .text-8xl",
            start: "top bottom",
          },
        }
      );
    };

    animation();

    // クリーンアップ関数
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // 初期レンダリング時はnullを返す
  if (!mounted) {
    return null;
  }

  return (
    <footer className="bg-black text-white border-t footer-section p-3 min-h-svh">
      <div className="container px-6 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center max-w-xl w-1/2 md:w-full" aria-label='office-tsuyuki logo'>
              <AutoPlayVideo
                videoSrcWebM="/images/logo-white.webm"
                videoSrcMp4="/images/logo-white.mp4"
                imgSrc="/images/logo-white.webp"
                alt="オフィス露木"
                width={640}
                height={360}
              />
            </Link>
            <p className="mt-4 text-sm">
              pom.jpにご興味をお持ちの方はぜひご連絡をお待ちしております。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-3">
            <div className='flex flex-col justify-start'>
              <h3 className="mb-6 text-sm font-semibold uppercase">内部リンク</h3>
              <ul className="space-y-4 pl-4">
                <li>
                  <Link href="/home" className="text-sm hover:text-muted-foreground" aria-label='homeへ'>
                    ホーム
                  </Link>
                </li>
                <li>
                  <Link href="/works" className="text-sm hover:text-muted-foreground" aria-label='worksへ'>
                    実例・実績
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="text-sm hover:text-muted-foreground" aria-label='blogsへ'>
                    ブログ
                  </Link>
                </li>
              </ul>
            </div>
            <div className='flex flex-col justify-start'>
              <h3 className="mb-6 text-sm font-semibold uppercase">外部リンク</h3>
              <ul className="space-y-4 pl-4">
                <li>
                  <Link href="https://pom.jp/" className="text-sm hover:text-muted-foreground" aria-label='pom.jpトップページ'>
                    pom.jp
                  </Link>
                </li>
                <li>
                  <Link href="https://pom.jp/kan/kan" className="text-sm hover:text-muted-foreground" aria-label='環コラボレイトデザインのサイト'>
                    環コラボレイトデザイン
                  </Link>
                </li>
                <li>
                  <Link href="https://pom.jp/nakano/nakano" className="text-sm hover:text-muted-foreground" aria-label='なかののサイト'>
                    なかの
                  </Link>
                </li>
                <li>
                  <Link href="https://pom.jp/fm/top_fm.html" className="text-sm hover:text-muted-foreground" aria-label='FMデータサポートのサイト'>
                    FMデータサポート
                  </Link>
                </li>
              </ul>
            </div>
            <div className='flex flex-col justify-start'>
              <h3 className="mb-6 text-sm font-semibold uppercase">法的情報</h3>
              <ul className="space-y-4 pl-4">
                <li>
                  <Link href="/privacy" className="text-sm hover:text-muted-foreground" aria-label='プライバシーポリシー'>
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm hover:text-muted-foreground" aria-label='利用規約'>
                    利用規約
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-end mt-12">
          <h2 className="text-8xl md:text-10xl lg:text-12xl font-bold text-slate-300 opacity-50 font-serif">Peace of Mind</h2>
        </div>
        <div className="flex flex-col items-center justify-between pt-8 mt-8 border-t border-border lg:flex-row">
          <div className="flex space-x-6 mb-4 lg:mb-0">
            <Button variant="ghost" size="icon">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>

          <p className="text-sm">
            &copy; {currentYear} pom.jp - オフィス露木 / 露木博視. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
