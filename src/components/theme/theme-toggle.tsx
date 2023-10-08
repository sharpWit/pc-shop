"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="theme">
          <Sun className="h-[2em] w-[2em] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[2em] w-[2em] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">تغییر تم</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          روشن
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          تاریک
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          پیش‌فرض سیستم
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
