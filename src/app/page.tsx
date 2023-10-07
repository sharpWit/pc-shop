import Link from "next/link";

import { siteConfig } from "config/site";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 font-iranyekan">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          کامپوننت های طراحی شده زیبا <br className="hidden sm:inline" />
          ایجاد شده با Radix UI و Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          شما می توانید کامپوننت هارو دانلود و کپی کنید.
        </p>
      </div>
      <ThemeToggle />
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          مستندات
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          گیت‌هاب
        </Link>
      </div>
    </section>
  );
}
