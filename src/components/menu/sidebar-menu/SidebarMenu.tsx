"use client";

// Icons //
import { AlignJustify } from "lucide-react";
import { useState } from "react";
import SidebarMainMenu from "./SidebarMainMenu";

const SidebarMenu = () => {
  const [showMenu, setShowMenu] = useState(true);

  function handleToggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={handleToggleMenu}
    >
      {showMenu ? (
        <AlignJustify className="text-primary" />
      ) : (
        <SidebarMainMenu />
      )}
    </div>
  );
};

export default SidebarMenu;
