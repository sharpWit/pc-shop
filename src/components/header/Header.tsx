"use client";

// Cores //
import { useEffect, useState } from "react";

// Componenets //
import MobileHeader from "./mobile/MobileHeader";
import DesktopHeader from "./desktop/DesktopHeader";

const Header = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Set initial state based on window.innerWidth
    setIsMobile(window.innerWidth < 1023);
    // Add an event listener for window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1023);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center pt-4 px-3 md:px-6 lg:px-2 pb-2 lg:pb-2 w-full bg-secondary text-secondary-foreground font-nav border-b-2 border-solid border-border z-[1000] max-h-40">
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
    </header>
  );
};

export default Header;
