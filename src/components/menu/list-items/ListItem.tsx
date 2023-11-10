// Cores //
import React from "react";

// Libraries //
import { cn } from "@/lib/utils";

// Components //
import { NavigationMenuLink } from "../navigation/Navigation";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <div>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex flex-col justify-center select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground relative",
            className
          )}
          {...props}
        >
          <h3 className="self-center mb-1 text-sm font-medium leading-none ">
            {title}
          </h3>
          <ul className="flex flex-col ">{children}</ul>
        </a>
      </NavigationMenuLink>
    </div>
  );
});
ListItem.displayName = "ListItem";

export default ListItem;
