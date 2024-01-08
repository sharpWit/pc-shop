// Icons //
import { Component } from "lucide-react";

// Cores //
import Link from "next/link";

// Components //
import FooterColumns from "./FooterContents";
import SocialPart from "./Socials";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground mt-4 mb-0 pt-6">
      <section className=" container flex flex-col px-2">
        <div className=" flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0 mb-2 ">
          <FooterColumns />
          <SocialPart />
        </div>
        <div className="border-t border-border text-center text-xs md:text-sm py-4">
          <div className="font-titles block md:flex items-center justify-center">
            <p className=" m-1">© تمام حقوق این سایت محفوظ است</p>
            <Component className=" inline p-1 text-primary" />
            <p className=" m-1">طراحی و توسعه توسط سعید خسروی</p>
          </div>
          <div className="py-1">
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-input text-input-foreground font-bold font-serif px-2 py-1"
            >
              PC-shop
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
