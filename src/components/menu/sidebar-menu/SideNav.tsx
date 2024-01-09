// Cores //
import React, { forwardRef } from "react";

// Icons //
import { X } from "lucide-react";

// Components //
import SidebarMainMenu from "./SidebarMainMenu";
import Logo from "@/components/header/logo/Logo";

interface Props {
  state?: string;
  onClose: () => void;
  children?: React.ReactNode;
  ref: React.HTMLProps<HTMLDivElement>;
}

const SideNav = forwardRef<HTMLDivElement, Props>(({ state, onClose }, ref) => {
  return (
    <div
      ref={ref}
      className={`max-w-[380px] w-[80%] min-h-screen h-full fixed top-0 right-0 shadow-md z-[1000] bg-card origin-right
         ${
           state === "entering"
             ? "animate-sidenavRTLEntering"
             : state === "entered"
             ? "translate-x-0"
             : "animate-sidenavRTLExit"
         }
        `}
    >
      <div
        className="absolute top-3 right-0 mr-[85%] text-4xl cursor-pointer"
        onClick={onClose}
      >
        <X />
      </div>
      <div className="pt-5 pb-3 pr-5" onClick={onClose}>
        <Logo />
      </div>
      <hr />
      <SidebarMainMenu />
    </div>
  );
});

SideNav.displayName = "SideNav";

export default SideNav;
