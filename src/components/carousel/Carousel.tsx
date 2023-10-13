"use client";

// Cores //
import Loading from "@/app/loading";

// Instruments //
import Slider from "react-slick";

// Icons //
import { ChevronFirst, ChevronLast } from "lucide-react";

// Components //
import Slide from "./Slide";
import { NextArrow, PrevArrow } from "./Arrows";

// Hooks //
import useCarousel from "./useCarousel";

const Carousel = () => {
  const { sliders, isLoading } = useCarousel();

  if (isLoading) return <Loading />;

  const settings = {
    rtl: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    prevArrow: <PrevArrow to="prev" />,
    nextArrow: <NextArrow to="next" />,
    appendDots: (dots: string) => (
      <div className="bg-transparent !pb-[40px]">
        <ul> {dots} </ul>
      </div>
    ),
  };
  return (
    <div className="relative max-w-[1676px] w-full h-auto ">
      <Slider {...settings}>
        {sliders?.map((item) => {
          return <Slide key={item.id} {...item} />;
        })}
      </Slider>
      <>
        <div className="absolute top-1/2 left-4 md:left-3 lg:left-8 shadow-lg rounded-full bg-card/80 p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
          <ChevronFirst />
        </div>
        <div className="absolute top-1/2 right-4 md:right-3 lg:right-8 shadow-lg rounded-full bg-card/80 p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
          <ChevronLast />
        </div>
      </>
    </div>
  );
};

export default Carousel;
