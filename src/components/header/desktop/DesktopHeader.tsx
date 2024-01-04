// Cores //
import dynamic from "next/dynamic";

// Components //
import Logo from "../logo/Logo";
import Menu from "@/components/menu/Menu";
import CartIcon from "@/components/cart/CartIcon";
import SearchBar from "@/components/search/SearchBar";
import { ModeToggle } from "@/components/theme/theme-toggle";

// dynamic import
const UserBox = dynamic(() => import("@/components/user/User"), {
  ssr: false,
});

const DesktopHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center py-2 px-4 w-full p-2 bg-secondary text-secondary-foreground font-nav border-b-2 border-solid border-border z-[1000]">
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
    </header>
  );
};
export default DesktopHeader;
