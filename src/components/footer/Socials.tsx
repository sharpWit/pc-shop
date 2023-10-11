"use client";
// Cores //
import Link from "next/link";

// Constants
import { socialMedia } from "@/constants/footer";

// Components //
import { InputField } from "../ui/form/InputField";
import { Button } from "../ui/button";

const SocialPart = () => {
  return (
    <div className="font-main mr-0 lg:mr-auto">
      <div>
        <h2 className="text-md sm:text-lg font-titles font-extrabold">
          همراه ما باشید!
        </h2>
        <div className="flex mt-3">
          {socialMedia.map((SocialItem) => {
            return (
              <Link
                href={SocialItem.href}
                key={SocialItem.name}
                className="px-2 opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out"
                aria-label={SocialItem.name}
              >
                <SocialItem.icon
                  style={{
                    fontSize: "1.4em",
                    color: "inherit",
                  }}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-sm md:text-base font-titles">
          با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
        </h2>

        <div className="flex w-full max-w-sm items-center space-x-2 mt-4">
          <InputField
            type="email"
            placeholder="لطفاً ایمیل خود را وارد کنید"
            className="placeholder:text-right ml-1"
          />
          <Button
            type="submit"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            ثبت
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialPart;
