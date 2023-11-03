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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/Card";

// Types //
import { IProduct } from "@/types/products";

interface Props {
  product: IProduct;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const [userRating, setUserRating] = useState("");

  const countRef = useRef(0);

  useEffect(
    function () {
      if (userRating) countRef.current++;
    },
    [userRating]
  );

  return (
    <Card className="col-span-3 m-2 md:m-4 shadow-xl relative">
      <CardContent>
        <Link
          href={`/${product.slug}/${product.subSlug}/${product.groupTitle}/${product.enTitle}`}
        >
          <div className="w-full p-2">
            <AspectRatio ratio={1 / 1}>
              <Image
                fill
                src={product.img[0]}
                alt={product.title}
                className="rounded-md object-cover drop-shadow-xl hover:scale-110 transition-transform duration-300 ease-in-out "
              />
            </AspectRatio>
          </div>
          {product?.discount ? (
            <span className="w-1/6 md:w-1/5 md:p-2 block absolute top-2 right-2">
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
        </Link>
      </CardContent>
      <CardHeader className="mb-4 gap-2">
        <StarRating
          defaultValue={product.rate}
          onSetRating={setUserRating}
          size={18}
          className=" place-content-center"
        />
        <CardTitle className="text-sm md:text-base font-titles">
          {product.title}
        </CardTitle>
        <CardDescription>
          <ProductPrice price={product.price} discount={product.discount} />
        </CardDescription>
      </CardHeader>
      <CardFooter className="p-1 absolute bottom-2 left-0 right-0 md:top-2 md:bottom-auto md:left-1 md:right-auto">
        <CardActions product={product} />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
