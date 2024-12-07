'use client'

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/app/_libs/utils"

const sidebarVariants = cva(
  "flex flex-col h-full",
  {
    variants: {
      variant: {
        default: "bg-background",
        neumorphic: "bg-white dark:bg-gray-800 shadow-[inset_-10px_-10px_20px_rgba(255,255,255,0.5),inset_10px_10px_20px_rgba(0,0,0,0.05)] dark:shadow-[inset_-10px_-10px_20px_rgba(255,255,255,0.1),inset_10px_10px_20px_rgba(0,0,0,0.3)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof sidebarVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(sidebarVariants({ variant }), className)}
    {...props}
  />
))
Sidebar.displayName = "Sidebar"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("px-4 py-2", className)}
    {...props}
  />
))
SidebarHeader.displayName = "SidebarHeader"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 overflow-auto", className)}
    {...props}
  />
))
SidebarContent.displayName = "SidebarContent"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("px-4 py-2", className)}
    {...props}
  />
))
SidebarFooter.displayName = "SidebarFooter"

const SidebarNav = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("space-y-1 p-2", className)}
    {...props}
  />
))
SidebarNav.displayName = "SidebarNav"

const SidebarNavItem = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement> & { icon?: React.ReactNode }
>(({ className, children, icon, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props}>
    <a
      className={cn(
        "flex items-center rounded-lg px-3 py-2",
        "text-gray-600 hover:bg-gray-100",
        "dark:text-gray-300 dark:hover:bg-gray-700",
        "transition-all duration-200 ease-in-out",
        "shadow-[5px_5px_10px_rgba(0,0,0,0.05),-5px_-5px_10px_rgba(255,255,255,0.5)]",
        "dark:shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.1)]"
      )}
      href="#"
    >
      {icon && <span className="mr-3">{icon}</span>}
      {children}
    </a>
  </li>
))
SidebarNavItem.displayName = "SidebarNavItem"

interface SidebarProviderProps {
    children: React.ReactNode;
    defaultOpen?: boolean;
}

const SidebarProvider: React.FC<SidebarProviderProps> = ({ children, defaultOpen }) => {
  return <>{children}</>
}

const SidebarTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-md text-sm font-medium",
      "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
      className
    )}
    {...props}
  />
))
SidebarTrigger.displayName = "SidebarTrigger"

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarNav,
  SidebarNavItem,
  SidebarProvider,
  SidebarTrigger,
}

