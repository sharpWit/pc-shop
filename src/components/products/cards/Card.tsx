"use client";

// Cores //
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Components //
import StarRating from "./rating/StarRating";
import ProductPrice from "../ProductPrice";
import CardActions from "./CardActions";
import { AspectRatio } from "@/components/ui/AspectRetio";

// Types //
import { IProduct } from "@/types/products";

interface Props {
  product: IProduct;
}

const Card: React.FC<Props> = ({ product }) => {
  const [userRating, setUserRating] = useState("");

  const countRef = useRef(0);

  useEffect(
    function () {
      if (userRating) countRef.current++;
    },
    [userRating]
  );

  return (
    <div className="col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-3 2xl:col-span-2 shadow-xl my-1 md:my-4 ml-1 md:mx-4 bg-card rounded-xl flex relative">
      <Link
        href={`/${product.slug}/${product.subSlug}/${product.groupTitle}/${product.enTitle}`}
        className="flex md:items-center md:flex-col relative w-full"
      >
        <div className="w-1/2 md:w-full relative bg-foreground/10 px-1 md:px-6 py-2 rounded-bl-xl rounded-tl-xl md:rounded-tr-xl md:rounded-bl-none order-2 md:order-none flex flex-col justify-between items-center">
          <div className="w-full">
            <AspectRatio ratio={1 / 1}>
              <Image
                fill
                src={product.img[0]}
                alt={product.title}
                className="rounded-md object-cover drop-shadow-xl hover:scale-110 transition-transform duration-300 ease-in-out !py-2 "
              />
            </AspectRatio>
          </div>
          {product?.discount ? (
            <span className="w-8 sm:w-auto block absolute -top-2 -right-2">
              <AspectRatio ratio={1 / 1}>
                <Image
                  fill
                  src="/images/discount-icon/discount.webp"
                  alt="discount-icon"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </span>
          ) : null}
        </div>
        <div className="flex flex-col justify-between flex-grow w-1/2 md:w-full px-2 md:px-3 py-2 md:py-4">
          <div className="flex justify-center md:justify-start gap-1 flex-col flex-grow overflow-hidden">
            <div className="self-center">
              <StarRating
                defaultValue={product.rate}
                onSetRating={setUserRating}
                size={18}
              />
            </div>
            <h3 className="text-sm sm:text-[12px] md:text-sm text-center text-muted-foreground font-titles">
              {product.title}
            </h3>
          </div>
          <ProductPrice price={product.price} discount={product.discount} />
        </div>
      </Link>

      <CardActions product={product} />
    </div>
  );
};

export default Card;
