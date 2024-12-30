"use client"

import * as React from "react"
import { cn } from "@/app/_libs/utils"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const SidebarContext = React.createContext<{ open: boolean; setOpen: (open: boolean) => void }>({
  open: false,
  setOpen: () => {},
})

interface SidebarProviderProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function SidebarProvider({ children, defaultOpen = false }: SidebarProviderProps) {
  const [open, setOpen] = React.useState(defaultOpen)
  return <SidebarContext.Provider value={{ open, setOpen }}>{children}</SidebarContext.Provider>
}

export function Sidebar({ className, children, ...props }: SidebarProps) {
  return (
    <div className={cn("sidebar", className)} {...props}>
      {children}
    </div>
  )
}

export function SidebarHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("sidebar-header", className)} {...props} />
}

export function SidebarContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("sidebar-content", className)} {...props} />
}

export function SidebarFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("sidebar-footer", className)} {...props} />
}

export function SidebarNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <nav className={cn("sidebar-nav", className)} {...props} />
}

export function SidebarNavItem({ className, icon, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { icon?: React.ReactNode }) {
  return (
    <div className={cn("sidebar-nav-item", className)} {...props}>
      {icon && <span className="sidebar-nav-item-icon">{icon}</span>}
      {children}
    </div>
  )
}

export function SidebarTrigger({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn("sidebar-trigger", className)} {...props} />
} 