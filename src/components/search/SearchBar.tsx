// Icons //
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex items-center flex-grow max-w-sm w-4/5 px-4 mr-4 rounded-full bg-background border border-border shadow-sm ">
      <Search style={{ color: "#2563EB" }} />
      <input
        className="px-4 py-2 lg:py-3 appearance-none bg-transparent border-none w-full text-xs md:text-sm lg:text-xl text-input-foreground placeholder-foreground/50 focus:outline-none"
        name="search"
        type="search"
        placeholder="جستجو"
      />
    </div>
  );
};

export default SearchBar;
