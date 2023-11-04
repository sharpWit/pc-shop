"use client";

// Instruments //
import Slider from "react-slick";

// Icons //
import { ChevronFirst, ChevronLast } from "lucide-react";

// Components //
import Slide from "./Slide";
import { NextArrow, PrevArrow } from "./Arrows";

// Constants //
import { sliders } from "../../constants/sliders";

// Styles //
import "./carousel.scss";

const Carousel = () => {
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
    className: "carousel",
    prevArrow: <PrevArrow to="prev" />,
    nextArrow: <NextArrow to="next" />,
    appendDots: (dots: string) => (
      <div className="bg-transparent !pb-[40px]">
        <ul> {dots} </ul>
      </div>
    ),
  };
  return (
    <div className="relative w-full h-full">
      <Slider {...settings}>
        {sliders.map((item) => {
          return <Slide key={item.id} {...item} />;
        })}
      </Slider>
      <>
        <div className="absolute top-1/2 left-4 md:left-3 lg:left-8 shadow-lg rounded-full bg-muted/80 p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
          <ChevronFirst />
        </div>
        <div className="absolute top-1/2 right-4 md:right-3 lg:right-8 shadow-lg rounded-full bg-muted/80 p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
          <ChevronLast />
        </div>
      </>
    </div>
  );
};

export default Carousel;
