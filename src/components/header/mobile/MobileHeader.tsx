// Cores //
import dynamic from "next/dynamic";

// Components //
// import Logo from "../logo/Logo";
import Menu from "@/components/menu/Menu";
import CartIcon from "@/components/cart/CartIcon";
import SearchBar from "@/components/search/SearchBar";
import { ModeToggle } from "@/components/theme/theme-toggle";

// dynamic import
const UserBox = dynamic(() => import("@/components/user/User"), {
  ssr: false,
});

const MobileHeader = () => {
  return (
    <header className="fixed bottom-0 right-0 left-0 w-full p-0 bg-secondary text-secondary-foreground font-nav border-t-2 border-solid border-border z-[1000]">
      {/* <div className="absolute shrink-0 -mr-3.5 lg:-mr-2">
        <Logo />
      </div> */}
      <div className="flex items-center justify-between lg:hidden py-2 px-4  bg-primary z-[1000] shadow-md">
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
export default MobileHeader;
