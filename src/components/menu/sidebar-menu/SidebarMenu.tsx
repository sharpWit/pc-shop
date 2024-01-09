"use client";

// Cores //
import { useRef } from "react";

// Instruments //
import { useDispatch, useSelector } from "react-redux";
import { Transition } from "react-transition-group";

// Icons //
import { AlignJustify } from "lucide-react";

// States //
import { sideNavBarActions } from "@/store/sideNavBar-slice";

// Components //
import SideNav from "./SideNav";

// Types //
import { ISideNavBarRootState } from "@/types/sidebar";

const SidebarMenu = () => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const isNavbarOpen = useSelector(
    (state: ISideNavBarRootState) => state.sideNavBar.isNavbarOpen
  );
  const closeNav = () => {
    dispatch(sideNavBarActions.closeNavbar());
  };

  const openNavBar = () => {
    dispatch(sideNavBarActions.openNavbar());
  };

  return (
    <div className="lg:hidden">
      <div onClick={openNavBar}>
        <AlignJustify />
      </div>
      <Transition
        nodeRef={nodeRef}
        in={isNavbarOpen!}
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          return (
            <>
              <SideNav ref={nodeRef} state={state} onClose={closeNav} />
              <div
                className={`fixed inset-0 z-[999] bg-black/60
                  ${
                    state === "entering"
                      ? "animate-fadeEntering"
                      : state === "entered"
                      ? "opacity-100"
                      : "animate-fadeExit"
                  }
                  `}
                onClick={closeNav}
              ></div>
            </>
          );
        }}
      </Transition>
    </div>
  );
};

export default SidebarMenu;
