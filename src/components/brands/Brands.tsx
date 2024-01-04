"use client";

// Instruments //
import Slider from "react-slick";

// Components //
import BrandBox from "./BrandBox";
import SectionTitle from "../ui/section-title";

// Constants //
import { brandContent } from "@/constants/brands";

const Brands = () => {
  const settings = {
    rtl: true,
    infinite: true,
    speed: 6000,
    slidesToShow: 8,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: "linear",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <section className="container mx-2 p-0 mb-10 space-y-8 text-center">
      <SectionTitle title={"برندهای محبوب"} />
      <Slider {...settings}>
        {brandContent.map((brandItem) => {
          return (
            <BrandBox
              key={brandItem.id}
              brandName={brandItem.name}
              imageSrc={brandItem.imgSrc}
            />
          );
        })}
      </Slider>
    </section>
  );
};

export default Brands;
