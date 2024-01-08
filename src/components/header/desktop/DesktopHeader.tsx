"use client";

// Cores //
import dynamic from "next/dynamic";

// Components //
import Logo from "../logo/Logo";
import CartIcon from "@/components/cart/CartIcon";
import SearchBar from "@/components/search/SearchBar";
import { ModeToggle } from "@/components/theme/theme-toggle";
import MegaMenu from "@/components/menu/mega-menu/MegaMenu";

// dynamic import
const UserBox = dynamic(() => import("@/components/user/User"), {
  ssr: false,
});

const DesktopHeader = () => {
  return (
    <section className="flex flex-col gap-2 container h-28">
      <div className="flex-1 flex items-center justify-between">
        <div className=" shrink-0 -mr-3.5 lg:-mr-2">
          <Logo />
        </div>
        <div className="flex-grow w-1/4">
          <SearchBar />
        </div>
        <div className="flex items-center justify-between">
          <UserBox />
          <CartIcon />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-between">
        <div>
          <MegaMenu />
        </div>

        <div>
          <ModeToggle />
        </div>
      </div>
    </section>
  );
};
export default DesktopHeader;
