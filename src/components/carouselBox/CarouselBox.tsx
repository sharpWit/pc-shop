// Cores //
import Link from "next/link";

// Instruments //
import Slider from "react-slick";

// Icons //
import { ChevronFirst, ChevronLast } from "lucide-react";

// Components //
import { NextArrow, PrevArrow } from "./CarouselBoxArrows";

interface Props {
  title: string;
  className?: string;
  href?: string;
  children?: React.ReactNode;
  full?: boolean;
}
const CarouselBox = ({ title, className, children, href, full }: Props) => {
  const settings = {
    className: ` px-4 ${full ? "bg-primary" : "bg-secondary"}`,
    infinite: true,
    speed: 600,
    centerPadding: "60px",
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    swipeToSlide: true,
    rtl: true,
    prevArrow: <PrevArrow to="prev" />,
    nextArrow: <NextArrow to="next" />,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className={`w-[100%] mx-auto my-8 flex rounded-md ${
        full ? "flex-col" : "bg-primary"
      }`}
    >
      <div
        className={`flex flex-col items-center justify-around flex-grow text-sm sm:text-base bg-destructive bg-no-repeat bg-center rounded-md backdrop-blur-md font-main ${className}`}
      >
        <h2
          className={`text-lg sm:text-xl font-bold font-titles ${
            full
              ? "text-secondary-foreground self-start"
              : "text-primary text-center mt-[-2rem] mr-4"
          } `}
        >
          {title}
        </h2>
        {!full ? (
          <Link
            href={`/${href}`}
            className="text-secondary-foreground text-sm font-bold py-2 px-6 -mb-4 shadow-lg block rounded-lg backdrop-filter backdrop-blur-[10px] bg-card"
          >
            دیدن همه
          </Link>
        ) : null}
      </div>
      <div
        className={`relative ${
          full ? "w-full mt-4" : "w-[55%] sm:w-[75%] md:w-[85%]"
        }`}
      >
        <Slider {...settings}>{children}</Slider>
        <div>
          <div className="absolute top-[45%] right-4 md:right-1 shadow-lg rounded-full bg-muted/80 p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
            <ChevronLast />
          </div>
          <div className="absolute top-[45%] left-4 md:-left-1 shadow-lg rounded-full bg-muted/80 p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
            <ChevronFirst />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselBox;
