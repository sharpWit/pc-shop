"use client";

// Cores //
import Link from "next/link";

// States //
import { useSelector } from "react-redux";

// Hooks //
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

// Components //
import { Button } from "../ui/button";
import SectionTitle from "../ui/section-title";
import Card from "../products/cards/ProductCard";

// Types //
import { INewestRootState, IProduct } from "@/types/products";

const Newest = () => {
  const { width } = useWindowDimensions();
  let numProductToShow = width >= 1536 ? 12 : 8;

  const newestProducts: IProduct[] = useSelector(
    (state: INewestRootState) => state.newestProductsList.newestProducts
  );

  return (
    <div className="mx-auto my-4 md:my-8 flex flex-col items-center max-w-full xl:max-w-[2100px] w-full">
      <SectionTitle title={"محصولات جدید"} />

      <div className="grid gap-8 md:gap-4 grid-cols-3 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12 ">
        {newestProducts
          ? newestProducts
              .slice(0, numProductToShow)
              .map((product: IProduct) => {
                return <Card key={product.title} product={product} />;
              })
          : null}
      </div>

      <div className="text-center">
        <Link href="/newestProducts">
          <Button
            size={"lg"}
            className="mt-4 font-main hover:scale-105 transition-all duration-300"
          >
            دیدن تمام محصولات جدید
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Newest;
