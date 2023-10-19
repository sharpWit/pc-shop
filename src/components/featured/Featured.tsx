// Cores //
import Image from "next/image";

// Components //
import Carousel from "./Carousel";

const Featured = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-start lg:justify-between gap-2 lg:gap-1 max-w-[1400px] w-full max-h-full lg:max-h-[60vh] h-full my-0 px-0 lg:px-1 ">
      <div className=" w-full lg:w-[75%] h-full">
        <Carousel />
      </div>

      <div className="flex flex-col md:flex-row lg:flex-col items-center justify-between gap-2 md:gap-4 lg:gap-[2vh] w-full lg:w-[25%] lg:max-h-[60vh] h-full mt-8 lg:mt-0 px-2 lg:px-0">
        <div>
          <Image
            src="/images/others/build-your-pc.webp"
            width={990}
            height={953}
            alt="banner"
            className="w-full h-full lg:h-[29vh] rounded-md cursor-pointer"
          />
        </div>

        <div>
          <Image
            src="/images/others/loan-sell.webp"
            width={990}
            height={953}
            alt="banner"
            className="w-full h-full lg:h-[29vh] rounded-md cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Featured;
