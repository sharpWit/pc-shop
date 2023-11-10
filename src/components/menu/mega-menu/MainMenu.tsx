"use client";

// Cores //
import React from "react";

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
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/card/hover-card/HoverCard";
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
import ListItem from "../list-items/ListItem";

// Hooks //
import useCategories from "@/hooks/useCategories";
import useSubCategories from "@/hooks/useSubCategories";
import useProductGroups from "@/hooks/useProductGroups";

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
      <HoverCard openDelay={10}>
        <HoverCardTrigger className="font-titles font-semibold text-lg cursor-pointer">
          دسته‌بندی کالاها
        </HoverCardTrigger>
        <HoverCardContent align="start" className="w-full p-0">
          <Menubar
            dir="rtl"
            className="block p-1 h-full bg-card hover:bg-card transition-colors"
          >
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer p-0 w-full">
                <PanelTopOpen
                  size={35}
                  className="text-primary hover:text-card-foreground transition-colors"
                />
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
                      {categories?.length
                        ? categories.map((cat) => (
                            <NavigationMenuItem className="w-full" key={cat.id}>
                              <NavigationMenuTrigger className="max-w-full">
                                {cat.name &&
                                cat.icon &&
                                cat.icon in iconComponents ? (
                                  <a
                                    href={cat.href}
                                    className="w-full h-full flex items-center gap-2 p-1 ml-2"
                                  >
                                    {React.createElement(
                                      iconComponents[
                                        cat.icon as keyof typeof iconComponents
                                      ],
                                      { className: "p-1" }
                                    )}
                                    {cat.name}
                                  </a>
                                ) : null}
                              </NavigationMenuTrigger>
                              <NavigationMenuContent>
                                <div className="grid md:grid-cols-2 gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                                  {subCategories
                                    ?.filter(
                                      (subCat) => subCat.slug === cat.href
                                    )
                                    .map((filteredSubCat) => (
                                      <ListItem
                                        key={filteredSubCat.id}
                                        title={filteredSubCat.name}
                                        href={`/${filteredSubCat.href}`}
                                      >
                                        {React.createElement(
                                          iconComponents[
                                            filteredSubCat.icon as keyof typeof iconComponents
                                          ],
                                          {
                                            className:
                                              "absolute top-[4px] right-[8px] p-1",
                                          }
                                        )}
                                        {productGroups?.map(
                                          (groupName) =>
                                            groupName.subSlug ===
                                              filteredSubCat.href && (
                                              <li
                                                key={groupName.id}
                                                className=" m-1 py-1 px-2 space-y-1 bg-card rounded-md hover:bg-primary/40 transition-colors"
                                              >
                                                <a
                                                  href={`/${groupName.href}`}
                                                  className="block w-full h-full text-sm leading-loose text-muted-foreground hover:text-foreground"
                                                >
                                                  {groupName.name}
                                                </a>
                                              </li>
                                            )
                                        )}
                                      </ListItem>
                                    ))}
                                </div>
                              </NavigationMenuContent>
                            </NavigationMenuItem>
                          ))
                        : null}
                    </NavigationMenuList>
                  </NavigationMenu>
                </MenubarItem>

                <MenubarSeparator />
                <MenubarItem>
                  <a href="/contact-us" className="block w-full h-full">
                    تماس باما
                  </a>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <a href="/our-customers" className="block w-full h-full">
                    باشگاه مشتریان
                  </a>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <a href="/bug-reports" className="block w-full h-full">
                    گزارش خطا
                  </a>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default MainMenu;
