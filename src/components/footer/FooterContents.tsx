// Cores //
import Link from "next/link";

// Constants
import { footerContent } from "@/constants/footer";

const FooterColumns = () => {
  return (
    <div className="flex justify-between flex-wrap flex-grow max-w-full lg:max-w-[60%]">
      {footerContent.map((item) => {
        return (
          <div className="mt-6 md:mt-0" key={item.title}>
            <h2 className=" text-lg font-semibold border-r-4 border-border px-2 font-titles">
              {item.title}
            </h2>
            <div className="flex flex-col mt-2 font-nav">
              {item.subtitles.map((subItem) => {
                return (
                  <Link
                    href={subItem.href}
                    key={subItem.text}
                    className="text-secondary-foreground px-4 py-2 hover:text-primary/70 transition-colors"
                  >
                    {subItem.text}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FooterColumns;
