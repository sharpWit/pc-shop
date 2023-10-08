import { Search } from "lucide-react";

//TODO: search by product name.
const SearchBar = () => {
  return (
    <>
      <div className="hidden md:flex items-center flex-grow max-w-[50rem] w-[90%] px-4 mr-4 rounded-full bg-primary/60 ">
        <Search style={{ color: "#fff", fontSize: "2em" }} />
        <input
          className="px-4 py-2 md:py-3 appearance-none bg-transparent border-none w-full text-3xl text-accent-foreground
       placeholder-primary-foreground/60 focus:outline-none "
          type="search"
          placeholder="جستجو"
        />
      </div>
      <div className=" block md:hidden">
        <Search style={{ color: "#2563EB", fontSize: "2em" }} />
      </div>
    </>
  );
};

export default SearchBar;
