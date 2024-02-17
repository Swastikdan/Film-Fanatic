"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "../ui/button";
export default function MobileDropdown({ navLinks }) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild >

        <Button variant="outline"  className="flex items-center space-x-1"> Menu </Button>

        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-5 p-2">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.path}
              className="hover:text-primary transition-colors duration-200 cursor-pointer "
            >
              <DropdownMenuItem className="text-base font-medium ">{link.title}</DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
