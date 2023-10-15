// Cores //
import Image from "next/image";

// Components //
import Carousel from "./Carousel";

const Featured = () => {
  return (
    <section className=" flex flex-col lg:flex-row justify-between gap-2 max-w-[1400px] w-full max-h-[40vh] h-[40vh] md:h-[50vh] md:max-h-[50vh] lg:max-h-[25rem] lg:h-[25rem] overflow-hidden my-0 px-2 ">
      <div className=" w-full lg:w-[75%]">
        <Carousel />
      </div>
      <div className="block md:flex lg:flex-col md:items-center md:justify-center md:gap-4 lg:gap-0 lg:justify-between w-full lg:w-[25%] mt-8 lg:mt-0">
        <div>
          <Image
            src="/images/others/build-your-pc.webp"
            width={990}
            height={953}
            alt="banner"
            className="w-full h-[12rem] rounded-md cursor-pointer"
          />
        </div>
        <div>
          <Image
            src="/images/others/loan-sell.webp"
            width={990}
            height={953}
            alt="banner"
            className="w-full h-[12rem] rounded-md mt-1 md:mt-0 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Featured;
