"use client";

import { useEffect, useState, useCallback } from 'react'
import { Menu, X, ChevronsLeft, ChevronsRight, Home, Tent, Brush, CodeXml } from 'lucide-react'
import { cn } from "@/app/_libs/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarNav,
  SidebarNavItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Link from "next/link"
import dynamic from 'next/dynamic'

const AutoPlayVideo = dynamic(() => import('../AutoPlayVideo'), {
  ssr: false, // サーバーサイドレンダリングを無効化
  loading: () => <div className="bg-grey" />
})
const SbToggleButton = dynamic(() => import('./sbToggleButton'), {
  ssr: false, // サーバーサイドレンダリングを無効化
  loading: () => <div className="bg-grey" />
})

export default function NeumorphicSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleSidebar = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  if (!mounted) {
    return null // 初期レンダリング時はnullを返して hydration mismatchを防ぐ
  }

  return (
    <SidebarProvider defaultOpen={false}>
      <div className='relative'>
      {/* モバイル用ハンバーガーメニューボタン */}
      <button
        type="button"
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-10 p-2 bg-white rounded-md shadow-neumorphic md:hidden"
        aria-expanded={isOpen ? "true" : "false"}
        aria-controls="sidebar"
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
      >
        <span className="sr-only">
          {isOpen ? "メニューを閉じる" : "メニューを開く"}
        </span>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* オーバーレイ（モバイル用） */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-1 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* サイドバー */}
      <Sidebar
        className={cn(
          "fixed left-0 top-0 z-2 h-screen w-72 transform transition-all duration-300 ease-in-out p-4",
          "bg-white dark:bg-gray-800",
          "shadow-neumorphic dark:shadow-neumorphic-dark",
          isOpen ? "translate-x-0" : "-translate-x-full md:left-6 md:bg-slate-300"
        )}
      >
        <SidebarHeader className="p-4">
          <Link href="http://www.pom.jp" aria-label="pomJP" className="logo-animation-container">
            {mounted && (
              <AutoPlayVideo
                videoSrcWebM="/images/pomjp.webm"
                videoSrcMp4="/images/pomjp.mp4"
                imgSrc="/images/pomjp.webp"
                alt="pom.jp"
                width={640}
                height={360}
              />
            )}
          </Link>
          <h2 className="text-lg font-semibold">Menu</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarNav>
            <SidebarNavItem icon={<Tent size={20} />} href="https://pom.jp/fm">FMデータサポート</SidebarNavItem>
            <SidebarNavItem icon={<Home size={20} />} href="/">株式会社オフィス露木</SidebarNavItem>
            <SidebarNavItem icon={<Brush size={20} />} href="https://pom.jp/kan">環コラボレイトデザイン</SidebarNavItem>
            <SidebarNavItem icon={<CodeXml size={20} />} href="https://pom.jp/nakano">なかの</SidebarNavItem>
          </SidebarNav>
        </SidebarContent>
        <SidebarFooter className="p-4">
          <p className="text-sm text-gray-500">© 2024 pom.jp - オフィス露木</p>
        </SidebarFooter>
        <SidebarTrigger
          onClick={toggleSidebar}
          className={cn(
            "absolute -right-4 top-1/2 transform -translate-y-1/2 z-10",
            "flex h-8 w-8 items-center justify-center",
            "rounded-full bg-white text-gray-600",
            "shadow-neumorphic dark:shadow-neumorphic-dark",
            "transition-all duration-300 ease-in-out",
            "hover:bg-gray-100 dark:hover:bg-gray-600",
            "hidden md:flex"
          )}
        >
          {isOpen ? <ChevronsLeft size={20} /> : <ChevronsRight size={30} />}
        </SidebarTrigger>
        {mounted && (
          <SbToggleButton 
            isOpen={isOpen} 
            toggleSidebar={toggleSidebar} 
          />
        )}
      </Sidebar>
      </div>
    </SidebarProvider>
  )
}
