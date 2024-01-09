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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion/AccordionElm";

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
    <Accordion dir="rtl" type="single" collapsible className="w-full font-nav">
      {categories?.length ? (
        Array.isArray(categories) ? (
          categories.map((cat) => (
            <AccordionItem value={cat.id} className="w-full" key={cat.id}>
              {cat.name && cat.icon && cat.icon in iconComponents ? (
                <AccordionTrigger>
                  <Link
                    href={`/${cat.href}`}
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    {React.createElement(
                      iconComponents[cat.icon as keyof typeof iconComponents],
                      { className: "text-primary" }
                    )}
                    {cat.name}
                  </Link>
                </AccordionTrigger>
              ) : null}
              <AccordionContent asChild>
                {Array.isArray(subCategories) ? (
                  subCategories
                    .filter((subCat) => subCat.slug === cat.href)
                    .map((filteredSubCat) => (
                      <Accordion
                        type="multiple"
                        className="w-full"
                        key={filteredSubCat.id}
                      >
                        <AccordionItem value={filteredSubCat.id}>
                          <AccordionTrigger>
                            <Link
                              href={`/${cat.href}/${filteredSubCat.href}`}
                              className="flex items-center gap-2 text-base font-medium"
                            >
                              {React.createElement(
                                iconComponents[
                                  filteredSubCat.icon as keyof typeof iconComponents
                                ],
                                { className: "text-primary" }
                              )}
                              {filteredSubCat.name}
                            </Link>
                          </AccordionTrigger>
                          <AccordionContent>
                            {Array.isArray(productGroups) ? (
                              productGroups
                                .filter(
                                  (groupName) =>
                                    groupName.subSlug === filteredSubCat.href
                                )
                                .map((groupName) => (
                                  <div key={groupName.id} className="w-full">
                                    <Link
                                      href={`/${cat.href}/${filteredSubCat.href}/${groupName.href}`}
                                      className="text-base"
                                    >
                                      {groupName.name}
                                    </Link>
                                  </div>
                                ))
                            ) : (
                              <div>خطا: گروه‌ محصولات یافت نشد!</div>
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ))
                ) : (
                  <div>خطا: دسته‌بندی‌های جانبی یافت نشد!</div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))
        ) : (
          <div>خطا: دسته‌بندی‌ها یافت نشد!</div>
        )
      ) : null}
    </Accordion>
  );
};

export default SidebarCatMenu;
