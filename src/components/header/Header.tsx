// Cores //
import React from "react";
import dynamic from "next/dynamic";

// Components //
import Logo from "./logo/Logo";
import Menu from "../menu/Menu";
import SearchBar from "../search/SearchBar";
import CartIcon from "../cart/CartIcon";
import { ModeToggle } from "../theme/theme-toggle";

const UserBox = dynamic(() => import("@/components/user/User"), {
  ssr: false,
});

const Header = () => {
  return (
    <header className="hidden lg:block fixed top-0 left-0 right-0 w-full max-h-[9rem] h-[8rem] z-[1000] bg-secondary text-secondary-foreground font-nav border-b-2 border-solid border-border">
      <section className=" container flex flex-col space-y-4">
        <div className="flex items-center justify-between mt-3 ">
          <div className=" shrink-0 -mr-3.5 lg:-mr-2">
            <Logo />
          </div>
          <div className="hidden lg:block lg:flex-grow w-1/4">
            <SearchBar />
          </div>

          <div className=" flex items-center justify-between">
            <UserBox />
            <CartIcon />
          </div>
        </div>

        <hr className="lg:hidden" />

        <div className="hidden lg:flex items-center justify-between">
          <div>
            <Menu />
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>

        {/* mobile screens */}
        <div className="flex items-center justify-between lg:hidden pb-3">
          <div>
            <Menu />
          </div>
          <div className="block lg:hidden ml-auto mr-3">
            <SearchBar />
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
