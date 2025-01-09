'use client';

import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import { cn } from "@/app/_libs/utils";

interface sbToggleButtonProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

export default function sbToggleButton({ isOpen, toggleSidebar }: sbToggleButtonProps) {
  return (
    <button
      type="button"
      onClick={toggleSidebar}
      className={cn(
        "absolute -right-4 top-1/2 transform -translate-y-1/2",
        "flex h-8 w-8 items-center justify-center",
        "rounded-full bg-white text-gray-600",
        "shadow-neumorphic dark:shadow-neumorphic-dark",
        "transition-all duration-300 ease-in-out",
        "hover:bg-gray-100 dark:hover:bg-gray-600",
        "hidden md:flex"
      )}
      aria-label='Toggle Sidebar'
    >
      {/* >> */}
      {isOpen ? <ChevronsLeft size={20} /> : <ChevronsRight size={30} />}
    </button>
  );
}