"use client"

import * as React from "react"
import { Moon, Sun , Tv2 } from "lucide-react"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
export default function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Link href="_#" className="bg-gray-200 dark:bg-gray-700 p-2.5 md:p-2 inline-flex items-center justify-center whitespace-nowrap rounded-md cursor-pointer " size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Link>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark:bg-gray-700" align="end">
        <DropdownMenuItem onClick={() => setTheme("light")} className="flex items-center space-x-2 cursor-pointer text-base md:text-sm font-semibold ">
        <Sun className="h-[1.2rem] w-[1.2rem]"/>   <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="flex items-center space-x-2 cursor-pointer text-base md:text-sm font-semibold ">
        <Moon className="h-[1.2rem] w-[1.2rem]"/>   <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="flex items-center space-x-2 cursor-pointer text-base md:text-sm font-semibold ">
        <Tv2 className="h-[1.2rem] w-[1.2rem]"/>   <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
