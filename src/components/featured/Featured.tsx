// Cores //
import Image from "next/image";

// Components //
import Carousel from "./Carousel";
import { AspectRatio } from "../ui/AspectRetio";

const Featured = () => {
  return (
    <section className="flex flex-wrap justify-center md:grid md:grid-rows-2 md:grid-cols-12 gap-4 m-0 md:m-2 lg:m-0 max-w-full">
      <div className="flex-1 md:row-span-2 md:col-start-1 md:col-end-10 w-full mb-8 md:mb-0 ">
        <Carousel />
      </div>

      <div className="md:col-start-10 md:col-end-13 w-[300px] md:w-full ">
        <AspectRatio ratio={13 / 11}>
          <Image
            src="/images/others/build-your-pc.webp"
            fill
            alt="banner"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
            className="rounded-md object-cover cursor-pointer"
          />
        </AspectRatio>
      </div>
      <div className="md:col-end-13 md:col-span-3 w-[300px] md:w-full ">
        <AspectRatio ratio={13 / 11}>
          <Image
            src="/images/others/loan-sell.webp"
            fill
            alt="banner"
            priority
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
            className="rounded-md object-cover cursor-pointer"
          />
        </AspectRatio>
      </div>
    </section>
  );
};

export default Featured;
