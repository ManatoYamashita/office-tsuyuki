"use client";

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  useEffect(() => {
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
        delay: 1,
        x: 0,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".footer-section .text-8xl",
          start: "top bottom",
        },
      }
    );
  }, []);

  return (
    <footer className="bg-foreground text-white border-t footer-section">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center">
              {/* <span className="text-2xl font-bold">ロゴ</span> */}
              <video title='オフィス露木' muted autoPlay playsInline poster='/logo.webp'>
                <source src="/images/logo-white.mov" type="video/quicktime" />
                <source src='/images/logo-white.webm' type='video/webm' />
              </video>
            </Link>
            <p className="mt-4 text-sm">
              当社は、革新的なソリューションを提供し、お客様のビジネスの成功をサポートします。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase">会社情報</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="text-sm hover:text-muted-foreground">
                    会社概要
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-sm hover:text-muted-foreground">
                    チーム
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm hover:text-muted-foreground">
                    採用情報
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase">サービス</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/services" className="text-sm hover:text-muted-foreground">
                    サービス一覧
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-sm hover:text-muted-foreground">
                    料金プラン
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm hover:text-muted-foreground">
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase">法的情報</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/privacy" className="text-sm hover:text-muted-foreground">
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm hover:text-muted-foreground">
                    利用規約
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-end mt-12">
          <h2 className="text-8xl md:text-10xl lg:text-12xl font-bold text-white">Peace of Mind</h2>
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
            &copy; 2024-{new Date().getFullYear()} pom.jp - オフィス露木 / 露木博視. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
