"use client";

// Hooks //
import { useExchangeRateGBPToIRR } from "@/hooks/useExchangeRateGBPToIRR";

// Utilities //
import { calculateDiscountPercentage } from "@/utils/calculateDiscountPercentage";
import { changeNumbersFormatEnToFa } from "@/utils/changeNumbersFormatEnToFa";

interface Props {
  price: number;
  discount?: number;
  isLargeSize?: boolean;
  isInSlider?: boolean;
}
const ProductPrice: React.FC<Props> = ({
  price,
  discount,
  isLargeSize = false,
  isInSlider,
}) => {
  const irPrice = useExchangeRateGBPToIRR(price);
  const discountPrice = discount
    ? calculateDiscountPercentage(price, discount)
    : 0;
  const irDiscountPrice = useExchangeRateGBPToIRR(discountPrice);

  //style base on component position
  const textMainPriceSize = isLargeSize
    ? "text-xl md:text-3xl"
    : "text-md md:text-lg";
  const textDiscountPriceSize = isLargeSize
    ? "text-md md:text-xl"
    : "text-[12px] md:text-md";
  const justifyContent = isInSlider ? "flex-start" : "";
  const flexDirection = isInSlider ? "row" : "row-reverse";

  return (
    <div>
      <div
        className={`flex justify-end self-end text-left mt-2 font-main`}
        style={{ justifyContent }}
      >
        {discount ? (
          <div className="flex items-end flex-wrap" style={{ flexDirection }}>
            <span className="flex flex-col">
              <del
                className={`text-destructive md:text-sm ${textDiscountPriceSize}`}
              >
                <sub className="ml-1 text-[10px]">تومان</sub>
                {irPrice}
              </del>
              <ins
                className={`font-bold self-end no-underline mt-1 ${textMainPriceSize}`}
              >
                <sub className="ml-1 text-[10px]">تومان</sub>
                {irDiscountPrice}
              </ins>
            </span>
            <span
              className="text-accent-foreground ml-1 text-[12px] inline-block"
              // style={{ direction: "rtl" }}
            >{`(-%${changeNumbersFormatEnToFa(discount!)})`}</span>
          </div>
        ) : (
          <div>
            {isInSlider ? <div className="h-[1.4rem]"></div> : null}{" "}
            {/* ☝slider cards (.slick-slide=>Slider component) are float and because of that, they don't accept height so, for making cards the same height, I have to do this hack*/}
            <div
              className={`flex items-center ${textMainPriceSize} font-bold no-underline`}
              style={{ flexDirection }}
            >
              <span>{irPrice}</span>
              <sub className="ml-1 text-[10px]">تومان</sub>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPrice;
