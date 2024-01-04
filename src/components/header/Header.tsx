"use client";

// Hooks //
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

// Components //
import DesktopHeader from "./desktop/DesktopHeader";
import MobileHeader from "./mobile/MobileHeader";

const Header = () => {
  const { width } = useWindowDimensions();

  const isDesktop = width > 1023;

  return <>{isDesktop ? <DesktopHeader /> : <MobileHeader />}</>;
};

export default Header;
