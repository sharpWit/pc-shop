// Cores //
import Link from "next/link";

// Components //
import { MenubarSeparator } from "../menubar/Menubar";
import SidebarExtraMenu from "./SidebarExtraMenu";
import SidebarCatMenu from "./SidebarCatMenu";

const SidebarMainMenu = () => {
  return (
    <section className="font-main p-3 flex flex-col justify-between h-[calc(100vh-10vh)]">
      <h2 className="text-xl font-semibold p-2">دسته‌بندی‌ها</h2>

      <SidebarCatMenu />

      <SidebarExtraMenu />

      <MenubarSeparator />
      {/* Other links */}
      <div className="flex flex-col text-sm">
        <Link href="/contact-us" className="block w-full h-full">
          تماس باما
        </Link>
        <Link href="/our-customers" className="block w-full h-full">
          باشگاه مشتریان
        </Link>
        <Link href="/bug-reports" className="block w-full h-full">
          گزارش خطا
        </Link>
      </div>
    </section>
  );
};
export default SidebarMainMenu;
