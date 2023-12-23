"use client";

// Icons //
import { User, ChevronDown } from "lucide-react";

// Components //
import UserAccountBox from "./UserAccountBox";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover/Popover";

const UserAccountBtn = () => {
  return (
    <div className="relative ml-2">
      <Popover>
        <PopoverTrigger className="flex items-center">
          <ChevronDown />
          <User />
        </PopoverTrigger>

        <PopoverContent className="z-[1000] font-nav max-w-max">
          <UserAccountBox />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default UserAccountBtn;
