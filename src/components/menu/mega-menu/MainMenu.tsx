"use client";

// Cores //
import React from "react";
import Link from "next/link";

// Icons //
import {
  PanelTopOpen,
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
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/menu/menubar/Menubar";
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

const MainMenu = () => {
  const { categories } = useCategories();
  const { subCategories } = useSubCategories();
  const { productGroups } = useProductGroups();

  return (
    <div>
      <Menubar dir="rtl">
        <MenubarMenu>
          <MenubarTrigger className="font-titles font-semibold text-lg cursor-pointer">
            <PanelTopOpen
              size={35}
              className="p-1 text-primary hover:text-card-foreground transition-colors"
            />
            دسته‌بندی کالاها
          </MenubarTrigger>

          <MenubarContent className="font-nav mt-1">
            <MenubarItem className="h-[50vh] z-60">
              <NavigationMenu
                className="font-nav bg-amber-600/50 justify-center"
                orientation="vertical"
              >
                <NavigationMenuList
                  className="text-lg"
                  data-orientation="vertical"
                >
                  {categories?.length ? (
                    Array.isArray(categories) ? (
                      categories.map((cat) => (
                        <NavigationMenuItem className="w-full" key={cat.id}>
                          <NavigationMenuTrigger className="max-w-full">
                            {cat.name &&
                            cat.icon &&
                            cat.icon in iconComponents ? (
                              <Link
                                href={`/${cat.href}`}
                                className="w-full h-full flex items-center gap-2 p-1 ml-2"
                              >
                                {React.createElement(
                                  iconComponents[
                                    cat.icon as keyof typeof iconComponents
                                  ],
                                  { className: "p-1" }
                                )}
                                {cat.name}
                              </Link>
                            ) : null}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="grid md:grid-cols-2 gap-3 p-4 min-h-screen w-[400px] md:w-[500px] lg:w-[600px]">
                            {Array.isArray(subCategories) ? (
                              subCategories
                                .filter((subCat) => subCat.slug === cat.href)
                                .map((filteredSubCat) => (
                                  <div
                                    key={filteredSubCat.id}
                                    className="flex flex-col select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground relative"
                                  >
                                    <Link
                                      href={`/${cat.href}/${filteredSubCat.href}`}
                                    >
                                      <h3 className="self-center mb-1 text-sm font-medium leading-none">
                                        {filteredSubCat.name}
                                      </h3>
                                    </Link>
                                    <ul className="flex flex-col">
                                      {Array.isArray(productGroups) ? (
                                        productGroups
                                          .filter(
                                            (groupName) =>
                                              groupName.subSlug ===
                                              filteredSubCat.href
                                          )
                                          .map((groupName) => (
                                            <li
                                              key={groupName.id}
                                              className="m-1 py-1 px-2 space-y-1 bg-card rounded-md hover:bg-primary/40 transition-colors"
                                            >
                                              <Link
                                                href={`/${cat.href}/${filteredSubCat.href}/${groupName.href}`}
                                                className="block w-full h-full text-sm leading-loose text-muted-foreground hover:text-foreground"
                                              >
                                                {groupName.name}
                                              </Link>
                                            </li>
                                          ))
                                      ) : (
                                        <div>
                                          Error: Product groups is not an array
                                        </div>
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
            </MenubarItem>

            <MenubarSeparator />
            <MenubarItem>
              <Link href="/contact-us" className="block w-full h-full">
                تماس باما
              </Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/our-customers" className="block w-full h-full">
                باشگاه مشتریان
              </Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/bug-reports" className="block w-full h-full">
                گزارش خطا
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default MainMenu;
