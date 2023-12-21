"use client";

// Cores //
import { useEffect, useRef, useState } from "react";

// Components //
import CallToAction from "./CallToAction";
import StarRating from "@/components/products/cards/rating/StarRating";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/Card";

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
    <div className="flex-1 font-main">
      <Card>
        <CardHeader>
          <CardTitle className="font-titles">{product.title}</CardTitle>
          <CardDescription>کد محصول</CardDescription>
        </CardHeader>
        <CardContent>
          <StarRating
            defaultValue={product.rate}
            onSetRating={setUserRating}
            size={21}
          />

          <CardDescription className="mt-2">
            جزئیات محصول
            {Object.keys(product.details!).map((key) => {
              const detailsValue = Array.isArray(product.details)
                ? [...product.details].join(" - ")
                : product.details;

              return (
                <div key={key}>
                  <h2 className="py-1 my-1">{[key]}</h2>:
                  <p className="mr-1">{detailsValue}</p>
                </div>
              );
            })}
          </CardDescription>
        </CardContent>
      </Card>
      <CallToAction product={product} />
    </div>
  );
};

export default DetailsSection;
