'use client'

import * as React from "react"
import { ChevronsLeft, ChevronsRight, Home, Mail, Calendar, Settings } from 'lucide-react'
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

export function NeumorphicSidebar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <SidebarProvider defaultOpen={false}>
      <Sidebar
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-64 transform transition-all duration-300 ease-in-out",
          "bg-white dark:bg-gray-800",
          "shadow-[inset_-10px_-10px_20px_rgba(255,255,255,0.5),inset_10px_10px_20px_rgba(0,0,0,0.05)]",
          "dark:shadow-[inset_-10px_-10px_20px_rgba(255,255,255,0.1),inset_10px_10px_20px_rgba(0,0,0,0.3)]",
          isOpen ? "translate-x-0" : "-translate-x-56"
        )}
      >
        <SidebarHeader className="p-4">
          <h2 className="text-lg font-semibold">Menu</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarNav>
            <SidebarNavItem icon={<Home size={20} />}>Home</SidebarNavItem>
            <SidebarNavItem icon={<Mail size={20} />}>Messages</SidebarNavItem>
            <SidebarNavItem icon={<Calendar size={20} />}>Calendar</SidebarNavItem>
            <SidebarNavItem icon={<Settings size={20} />}>Settings</SidebarNavItem>
          </SidebarNav>
        </SidebarContent>
        <SidebarFooter className="p-4">
          <p className="text-sm text-gray-500">© 2023 Your Company</p>
        </SidebarFooter>
        <SidebarTrigger
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "absolute -right-4 top-4 z-50",
            "flex h-8 w-8 items-center justify-center",
            "rounded-full bg-white text-gray-600",
            "shadow-[5px_5px_10px_rgba(0,0,0,0.05),-5px_-5px_10px_rgba(255,255,255,0.5)]",
            "dark:bg-gray-700 dark:text-gray-200",
            "dark:shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.1)]",
            "transition-all duration-300 ease-in-out",
            "hover:bg-gray-100 dark:hover:bg-gray-600"
          )}
        >
          {isOpen ? <ChevronsLeft size={16} /> : <ChevronsRight size={16} />}
        </SidebarTrigger>
      </Sidebar>
    </SidebarProvider>
  )
}

