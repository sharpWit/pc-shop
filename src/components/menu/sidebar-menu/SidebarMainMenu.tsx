"use client";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet/Sheet";

import Link from "next/link";
import { MenubarSeparator } from "../menubar/Menubar";
import SidebarExtraMenu from "./SidebarExtraMenu";
import SidebarCatMenu from "./SidebarCatMenu";

const SidebarMainMenu = () => {
  return (
    <Sheet open>
      <SheetContent className="flex flex-col justify-between z-[1001] w-full">
        <SheetHeader>
          <SheetTitle>دسته‌بندی‌ها</SheetTitle>
        </SheetHeader>
        <SidebarCatMenu />
        <SidebarExtraMenu />
        <SheetFooter className="text-sm font-medium">
          <MenubarSeparator />
          <Link href="/contact-us" className="block w-full h-full">
            تماس باما
          </Link>
          <MenubarSeparator />
          <Link href="/our-customers" className="block w-full h-full">
            باشگاه مشتریان
          </Link>
          <MenubarSeparator />
          <Link href="/bug-reports" className="block w-full h-full">
            گزارش خطا
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
export default SidebarMainMenu;
