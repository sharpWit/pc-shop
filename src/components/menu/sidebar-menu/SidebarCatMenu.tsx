"use client";

// Cores //
import React from "react";
import Link from "next/link";

// Icons //
import {
  MonitorSpeaker,
  PcCase,
  Computer,
  MemoryStick,
  Mouse,
  Laptop,
  TabletSmartphone,
  Database,
  Bot,
  Headphones,
  Cable,
  HdmiPort,
  Usb,
  Network,
  Router,
  PlugZap,
  Webcam,
  Server,
  Mic2,
  Mic,
  Projector,
  PictureInPicture2,
} from "lucide-react";

// Components //
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/menu/navigation/Navigation";

// Hooks //
import useCategories from "@/hooks/useCategories";
import useSubCategories from "@/hooks/useSubCategories";
import useProductGroups from "@/hooks/useProductGroups";

// Creating Icon components from their names
const iconComponents = {
  MonitorSpeaker,
  PcCase,
  Computer,
  MemoryStick,
  Mouse,
  Laptop,
  TabletSmartphone,
  Database,
  Bot,
  Headphones,
  Cable,
  HdmiPort,
  Usb,
  Network,
  Router,
  PlugZap,
  Webcam,
  Server,
  Mic2,
  Mic,
  Projector,
  PictureInPicture2,
};

const SidebarCatMenu = () => {
  const { categories } = useCategories();
  const { subCategories } = useSubCategories();
  const { productGroups } = useProductGroups();

  return (
    <NavigationMenu
      className="font-nav bg-amber-600/50 p-1 w-1/2 my-2"
      orientation="vertical"
    >
      <NavigationMenuList data-orientation="vertical" className="h-full">
        {categories?.length ? (
          Array.isArray(categories) ? (
            categories.map((cat) => (
              <NavigationMenuItem className="w-full" key={cat.id}>
                <NavigationMenuTrigger className="max-w-full p-1">
                  {cat.name && cat.icon && cat.icon in iconComponents ? (
                    <Link
                      href={`/${cat.href}`}
                      className="w-full h-full flex items-center gap-2 p-1 ml-2 text-xs"
                    >
                      {React.createElement(
                        iconComponents[cat.icon as keyof typeof iconComponents],
                        { className: "p-[0.1em]" }
                      )}
                      {cat.name}
                    </Link>
                  ) : null}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[8rem] md:min-w-[10rem] w-full py-3 pr-4 pl-2">
                  {Array.isArray(subCategories) ? (
                    subCategories
                      .filter((subCat) => subCat.slug === cat.href)
                      .map((filteredSubCat) => (
                        <div
                          key={filteredSubCat.id}
                          className="flex flex-col select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground relative"
                        >
                          <Link href={`/${cat.href}/${filteredSubCat.href}`}>
                            <h3 className="self-center mb-1 text-xs p-1 font-medium leading-none">
                              {filteredSubCat.name}
                            </h3>
                          </Link>
                          <ul className="flex flex-col">
                            {Array.isArray(productGroups) ? (
                              productGroups
                                .filter(
                                  (groupName) =>
                                    groupName.subSlug === filteredSubCat.href
                                )
                                .map((groupName) => (
                                  <li
                                    key={groupName.id}
                                    className="m-1 p-1 space-y-1 bg-card rounded-md hover:bg-primary/40 transition-colors"
                                  >
                                    <Link
                                      href={`/${cat.href}/${filteredSubCat.href}/${groupName.href}`}
                                      className="block w-full h-full text-xs leading-loose text-muted-foreground hover:text-foreground"
                                    >
                                      {groupName.name}
                                    </Link>
                                  </li>
                                ))
                            ) : (
                              <div>Error: Product groups is not an array</div>
                            )}
                          </ul>
                        </div>
                      ))
                  ) : (
                    <div>Error: Subcategories is not an array</div>
                  )}
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))
          ) : (
            <div>Error: Categories is not an array</div>
          )
        ) : null}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default SidebarCatMenu;
