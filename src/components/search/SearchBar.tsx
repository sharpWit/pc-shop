// Icons //
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <>
      <div className="hidden md:flex items-center flex-grow max-w-[40rem] w-[90%] px-4 mr-4 rounded-full bg-secondary-foreground/20 ">
        <Search style={{ color: "#2563EB" }} />
        <input
          className="px-4 py-2 lg:py-3 appearance-none bg-transparent border-none w-full text-xl text-secondary-foreground
       placeholder-primary/40 focus:outline-none "
          type="search"
          placeholder="جستجو"
        />
      </div>
      <div className=" block md:hidden">
        <Search style={{ color: "#2563EB" }} />
      </div>
    </>
  );
};

export default SearchBar;
