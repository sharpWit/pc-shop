import React from "react";
import Logo from "./logo/Logo";
import Menu from "../menu/Menu";
import SearchBar from "../search/SearchBar";
import LoginBtn from "../user/LoginBtn";
import CartIcon from "../cart/CartIcon";
import { ModeToggle } from "../theme/theme-toggle";

const Header = () => {
  return (
    <header className="md:fixed top-0 left-0 right-0 w-full z-[1000] bg-secondary text-secondary-foreground font-vazirmatn border-b-2 border-solid border-border">
      <div className=" my-0 mx-auto p-3 max-w-[1800px]">
        <div className="flex items-center justify-between py-4 pl-5">
          <div className=" shrink-0">
            <Logo />
          </div>
          <div className="hidden md:block md:flex-grow w-1/4">
            <SearchBar />
          </div>

          <div className=" flex items-center justify-between">
            <div>
              <LoginBtn />
            </div>
            <div className=" mr-2 sm:mr-4">
              <CartIcon />
            </div>
          </div>
        </div>

        <hr className="md:hidden" />

        <div className="hidden md:flex items-center justify-between py-4 px-5 mt-4">
          <div>
            <Menu />
          </div>
          <div className=" ml-10 text-right">
            <ModeToggle />
          </div>
        </div>

        {/* mobile screens */}

        <div className="flex items-center justify-between md:hidden pt-4 px-5">
          <div>
            <Menu />
          </div>
          <div className="block md:hidden ml-auto mr-2">
            <SearchBar />
          </div>
          <div className="text-right">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
