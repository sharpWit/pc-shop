"use client";

// Cores //
import { useEffect, useRef, useState } from "react";

// Components //
import CallToAction from "./CallToAction";
import StarRating from "@/components/products/cards/rating/StarRating";

// Types //
import { IProduct } from "@/types/products";

interface Props {
  product: IProduct;
}
const DetailsSection: React.FC<Props> = ({ product }) => {
  const [userRating, setUserRating] = useState("");

  const countRef = useRef(0);

  useEffect(
    function () {
      if (userRating) countRef.current++;
    },
    [userRating]
  );

  return (
    <div className="bg-palette-card md:bg-transparent w-[100vw] md:w-auto px-5 flex-grow self-center lg:self-start mt-8 md:mt-0 !-mx-[1rem] lg:ltr:ml-4 lg:rtl:mr-4 py-5 md:py-0 rounded-tl-[4rem] rounded-tr-[3rem] flex flex-col z-10">
      <h2 className="text-palette-mute whitespace-normal text-center rtl:md:text-right ltr:md:text-left">
        {product.title}
      </h2>
      <hr className="mt-1 hidden md:block" />
      <div className="flex items-start flex-wrap relative">
        <div className="flex-grow mt-6">
          <div className="flex items-center self-center">
            <StarRating
              defaultValue={product.rate}
              onSetRating={setUserRating}
              size={21}
            />
            <p className="text-sm text-palette-mute rtl:mr-2 ltr:ml-2">
              {product.rate}
            </p>
          </div>
          <h3 className="text-lg mt-2">جزئیات محصول</h3>
          <div className="mt-4">
            {Object.keys(product.details!).map((key) => {
              const detailsValue = Array.isArray(product.details)
                ? [...product.details].join(" - ")
                : product.details;

              return (
                <div className="flex flex-wrap items-center" key={key}>
                  <h5 className="text-palette-mute text-sm py-1 my-1">
                    {[key]}
                  </h5>
                  :
                  <p
                    className="rtl:text-left rtl:mr-1"
                    style={{ direction: "rtl" }}
                  >
                    {detailsValue}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <CallToAction product={product} />
      </div>
    </div>
  );
};

export default DetailsSection;
