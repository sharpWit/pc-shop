"use client";

// Cores //
import React from "react";
import Link from "next/link";

// Instruments //
import { useSelector } from "react-redux";

// Components //
import ProductPrice from "@/components/products/ProductPrice";

// Utilities //
import { changeNumbersFormatEnToFa } from "@/utils/changeNumbersFormatEnToFa";

// Types //
import { ICartRootState } from "@/types/cart";

const OrderSummaryBox = () => {
  const totalAmount = useSelector(
    (state: ICartRootState) => state.cart.totalAmount
  );
  const totalQuantity = useSelector(
    (state: ICartRootState) => state.cart.totalQuantity
  );

  return (
    <div className="px-4 font-main">
      {totalQuantity > 0 ? (
        <div className="flex-grow sticky bottom-0 left-0 right-0 md:top-36 shadow-lg bg-card border-2 rounded-lg py-4 xl:py-12 px-4 xl:px-8 -mx-[1rem] md:mx-4 xl:mx-8 mt-2 w-[100vw] md:w-auto  md:min-w-[300px] md:max-w-[400px]">
          <h3 className="text-md sm:text-lg md:text-xl">خلاصه سبد خرید</h3>
          <div className="flex flex-col my-1 sm:my-2">
            <div className="flex items-center justify-between md:my-4">
              <p className="text-sm sm:text-base text-muted-foreground">
                مجموع آیتم‌های سبد خرید
              </p>
              <p className="ml-1 font-bold">
                {changeNumbersFormatEnToFa(totalQuantity)}
              </p>
            </div>
            <div className="flex flex-wrap items-baseline justify-between flex-grow md:my-4">
              <p className="text-sm sm:text-base text-muted-foreground">
                مبلغ کل
              </p>
              <ProductPrice price={totalAmount} />
            </div>
          </div>
          <Link
            href="/"
            className="block bg-primary md:mt-8 py-3 rounded-lg text-primary-foreground text-center shadow-lg"
          >
            سفارش
          </Link>
        </div>
      ) : (
        <p className="text-muted-foreground text-lg mx-auto mt-12">
          سبد خرید خالی است
        </p>
      )}
    </div>
  );
};

export default OrderSummaryBox;
