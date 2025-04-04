'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Building2, BookOpen, Mail } from 'lucide-react';
import { cn } from '@/app/_libs/utils';
import gsap from 'gsap';

const menuItems = [
  {
    href: '/works',
    label: '事例・実績',
    icon: Building2,
    description: '行ってきたプロジェクトの実例をご覧いただけます'
  },
  {
    href: '/blogs',
    label: 'お知らせ・ブログ',
    icon: BookOpen,
    description: '最新のお知らせとブログ'
  },
  {
    href: 'https://asp11.hotbiz.jp/hbu3202/hb_login.cgi',
    label: '社内連絡',
    icon: Mail,
    description: '社員専用の連絡ページです'
  }
] as const;

export default function Menu() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);
    
  useEffect(() => {
    if (!mounted || !menuRef.current) return;
    
    // メニュー項目のアニメーション
    gsap.fromTo(
      menuRef.current.children,
      {
        y: -20,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      }
    );
  }, [mounted]);

  // マウントされていない場合は、静的な表示をレンダリングして早期のハイドレーション不一致を避ける
  const renderMenu = () => {
    return (
      <ul ref={menuRef} className="flex items-center justify-center space-x-1 sm:py-4 md:space-x-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <li key={item.href} className="relative group">
              <Link
                href={item.href}
                className={cn(
                  "relative flex items-center sm:px-4 px-2 py-2 rounded-lg",
                  "transition-all duration-300 ease-in-out",
                  "hover:bg-gray-50 dark:hover:bg-gray-800/50",
                  "group-hover:shadow-lg group-hover:scale-105",
                  isActive && "bg-gray-50 dark:bg-gray-800/50"
                )}
                aria-label='menu item'
              >
                <Icon
                  className={cn(
                    "w-4 h-4 sm:mr-2 mr-1 transition-colors duration-300",
                    isActive ? "text-primary" : "text-gray-500",
                    "group-hover:text-primary"
                  )}
                />
                <span
                  className={cn(
                    "sm:text-sm text-xs font-medium transition-colors duration-300",
                    isActive ? "text-primary" : "text-gray-700 dark:text-gray-200",
                    "group-hover:text-primary"
                  )}
                >
                  {item.label}
                </span>

                {/* ホバー時のアンダーライン */}
                <span className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-primary",
                  "transition-all duration-300 ease-out",
                  "w-0 group-hover:w-full"
                )} />
              </Link>

              {/* ツールチップ (マウント後のみ表示) */}
              {mounted && (
                <div className={cn(
                  "absolute left-1/2 -translate-x-1/2 -top-12 w-48",
                  "opacity-0 invisible group-hover:opacity-100 group-hover:visible",
                  "transition-all duration-300 z-30"
                )}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-2">
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                  {/* 矢印 */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 
                                w-2 h-2 bg-white dark:bg-gray-800 rotate-45" />
                </div>
              )}

              {/* 区切り線 */}
              {index !== menuItems.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 
                              h-4 w-px bg-gray-200 dark:bg-gray-700" />
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <nav className="relative bg-slate-50 backdrop-blur-sm">
      <div className="container mx-auto sm:px-4 px-0" style={{ opacity: mounted ? 1 : 0.8 }}>
        {renderMenu()}
      </div>
      
      {/* 下部のグラデーションライン */}
      <div className="absolute bottom-0 left-0 w-full h-px 
                    bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </nav>
  );
}
