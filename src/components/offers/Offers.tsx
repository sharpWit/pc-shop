"use client";

// Instruments //
import { useSelector } from "react-redux";

// Components //
import CarouselBox from "../carouselBox/CarouselBox";
import CarouselBoxCard from "../carouselBox/CarouselBoxCard";

// Types //
import { IProduct } from "@/types/products";
import { IOfferRootState } from "@/types/offerProductsState";

const Offers = () => {
  const OfferProducts = useSelector(
    (state: IOfferRootState) =>
      state.specialOfferProductsList.specialOfferProducts
  );

  return (
    <div className="md:mt-4 w-full xl:max-w-[2100px] mx-auto">
      <CarouselBox
        title="پیشنهادات ویژه"
        className="bg-offersBG"
        href="/offers"
      >
        {OfferProducts.slice(0, 10).map((product: IProduct) => {
          return <CarouselBoxCard key={product.id} product={product} />;
        })}
      </CarouselBox>
    </div>
  );
};

export default Offers;
