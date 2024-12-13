'use client'

import * as React from "react"
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
} from "@/app/_components/ui/sidebar"
import Link from "next/link"

export function NeumorphicSidebar() {
  const [isOpen, setIsOpen] = React.useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <SidebarProvider defaultOpen={false}>
      {/* ハンバーガーメニューボタン（モバイル用） */}
      <button
        type="button"
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-neumorphic md:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* オーバーレイ（モバイル用） */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* サイドバー */}
      <Sidebar
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-72 transform transition-all duration-300 ease-in-out p-4",
          "bg-white dark:bg-gray-800",
          "shadow-neumorphic dark:shadow-neumorphic-dark",
          isOpen ? "translate-x-0" : "-translate-x-full md:left-4"
        )}
      >
        <SidebarHeader className="p-4">
          <Link href="http://www.pom.jp" aria-label="pomJP" className="logo-animation-container">
            <video autoPlay muted playsInline className="w-full h-full object-cover" poster="/images/pomjp.svg">
              <source src="/images/pomjp.webm" type="video/webm" />
              <source src="/images/pomjp.mp4" type="video/mp4" />
              お使いのブラウザはvideoタグをサポートしていません。
            </video>
          </Link>
          <h2 className="text-lg font-semibold">Menu</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarNav>
            <SidebarNavItem icon={<Tent size={20} />}>FMデータサポート</SidebarNavItem>
            <SidebarNavItem icon={<Home size={20} />}>株式会社オフィス露木</SidebarNavItem>
            <SidebarNavItem icon={<Brush size={20} />}>環コラボレイトデザイン</SidebarNavItem>
            <SidebarNavItem icon={<CodeXml size={20} />}>なかの</SidebarNavItem>
          </SidebarNav>
        </SidebarContent>
        <SidebarFooter className="p-4">
          <p className="text-sm text-gray-500">© 2023 Your Company</p>
        </SidebarFooter>
        <SidebarTrigger
          onClick={toggleSidebar}
          className={cn(
            "absolute -right-4 top-1/2 transform -translate-y-1/2 z-50",
            "flex h-8 w-8 items-center justify-center",
            "rounded-full bg-white text-gray-600",
            "shadow-neumorphic dark:shadow-neumorphic-dark",
            "transition-all duration-300 ease-in-out",
            "hover:bg-gray-100 dark:hover:bg-gray-600",
            "hidden md:flex" // デスクトップでのみ表示
          )}
        >
          {isOpen ? <ChevronsLeft size={20} /> : <ChevronsRight size={30} />}
        </SidebarTrigger>
      </Sidebar>
    </SidebarProvider>
  )
}

