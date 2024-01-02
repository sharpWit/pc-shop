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
    <header className="block lg:fixed top-0 left-0 right-0 w-full max-h-16 lg:max-h-[9rem] h-12 lg:h-[8rem] p-2 lg:p-0 z-[1000] bg-secondary text-secondary-foreground font-nav border-b-2 border-solid border-border">
      {/* Desktop */}
      <section className="hidden lg:flex flex-col gap-2 container">
        <div className="flex items-center justify-between mt-3 ">
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

        <div className="flex items-center justify-between">
          <div>
            <Menu />
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </section>

      {/* mobile screens */}
      <section className="block lg:hidden">
        <div className=" shrink-0 -mr-3.5 lg:-mr-2">
          <Logo />
        </div>
      </section>
      <div className="flex items-center justify-between lg:hidden py-2 px-4 fixed bottom-0 right-0 left-0 bg-primary z-[1000] shadow-md">
        <div>
          <Menu />
        </div>
        <div>
          <UserBox />
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          <CartIcon />
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
