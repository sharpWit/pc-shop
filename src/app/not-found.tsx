"use client";

// Cores //
import { useRouter } from "next/navigation";

// Components //
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full mt-8 md:mt-6 grow">
      <section className="container ">
        <div className="flex flex-col items-center font-titles">
          <h2 className="font-black text-xl md:text-2xl text-red-800 mb-4">
            خطای 404، صفحه یافت نشد!
          </h2>
          <p className=" text-sm md:text-base font-main">
            متاسفانه صفحه مورد نظر شما پیدا نشد!
          </p>
          <Button
            onClick={() => router.push("/")}
            size={"lg"}
            className="py-4 px-4 mt-5 font-main"
          >
            برگشت به صفحه اصلی
          </Button>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
