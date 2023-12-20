"use client";

// Cores //
import React, { useEffect } from "react";

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
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/menu/navigation/Navigation";
import ListItem from "../list-items/ListItem";

// Hooks //
import useCategories from "@/hooks/useCategories";
import useSubCategories from "@/hooks/useSubCategories";
import useProductGroups from "@/hooks/useProductGroups";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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
                  {categories?.length
                    ? categories.map((cat) => (
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
                          <NavigationMenuContent>
                            <div className="grid md:grid-cols-2 gap-3 p-4 min-h-screen w-[400px] md:w-[500px] lg:w-[600px]">
                              {subCategories
                                ?.filter((subCat) => subCat.slug === cat.href)
                                .map((filteredSubCat) => (
                                  <div key={filteredSubCat.id}>
                                    <NavigationMenuLink
                                      href={`/${cat.href}/${filteredSubCat.href}`}
                                      className="flex flex-col justify-center select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground relative"
                                    >
                                      <h3 className="self-center mb-1 text-sm font-medium leading-none ">
                                        {filteredSubCat.name}
                                      </h3>
                                      <ul className="flex flex-col ">
                                        {productGroups?.map(
                                          (groupName) =>
                                            groupName.subSlug ===
                                              filteredSubCat.href && (
                                              <li
                                                key={groupName.id}
                                                className=" m-1 py-1 px-2 space-y-1 bg-card rounded-md hover:bg-primary/40 transition-colors"
                                              >
                                                <Link
                                                  href={`/${cat.href}/${filteredSubCat.href}/${groupName.href}`}
                                                  className="block w-full h-full text-sm leading-loose text-muted-foreground hover:text-foreground"
                                                >
                                                  {groupName.name}
                                                </Link>
                                              </li>
                                            )
                                        )}
                                      </ul>
                                    </NavigationMenuLink>
                                  </div>
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

// <ListItem

//   key={filteredSubCat.id}
//   // onClick={() =>
//   //   router.push(
//   //     `${cat.href}/${filteredSubCat.href}`
//   //   )
//   // }
//   // onClick={(e) => {
//   //   e.preventDefault(); // Prevent the default behavior
//   //   router.push(
//   //     `${cat.href}/${filteredSubCat.href}`
//   //   );
//   // }}
//   title={filteredSubCat.name}
//   href={`${cat.href}/${filteredSubCat.href}`}
// >
//   {React.createElement(
//     iconComponents[
//       filteredSubCat.icon as keyof typeof iconComponents
//     ],
//     {
//       className:
//         "absolute top-[4px] right-[8px] p-1",
//     }
//   )}
// {productGroups?.map(
//   (groupName) =>
//     groupName.subSlug ===
//       filteredSubCat.href && (
//       <li
//         key={groupName.id}
//         className=" m-1 py-1 px-2 space-y-1 bg-card rounded-md hover:bg-primary/40 transition-colors"
//       >
//         <Link
//           href={`${cat.href}/${filteredSubCat.href}/${groupName.href}`}
//           className="block w-full h-full text-sm leading-loose text-muted-foreground hover:text-foreground"
//         >
//           {groupName.name}
//         </Link>
//       </li>
//     )
// )}
// </ListItem>
