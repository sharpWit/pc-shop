// Cores //
import Link from "next/link";
import Image from "next/image";

// Components //
import ProductPrice from "../products/ProductPrice";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card/Card";

// Types //
import { IProduct } from "@/types/products";
import { AspectRatio } from "../ui/AspectRetio";

interface Props {
  product: IProduct;
}

const CarouselBoxCard = ({ product }: Props) => {
  return (
    <Card className="ml-2 backdrop-filter backdrop-blur-[10px] overflow-hidden">
      <Link
        href={`/${product.slug}/${product.subSlug}/${product.groupTitle}/${product.enTitle}`}
      >
        <CardContent className="w-full relative p-2">
          {product?.img[0] && (
            <AspectRatio ratio={1 / 1}>
              <Image
                fill
                src={product?.img[0]}
                alt={product.title}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                className="rounded-md object-contain hover:scale-105 transition-transform
                duration-300 ease-in-out p-2"
              />
            </AspectRatio>
          )}
          {product.isOffer ? (
            <span className="w-8 block absolute top-2 right-2">
              <AspectRatio ratio={1 / 1}>
                <Image
                  fill
                  src="/images/discount-icon/discount.webp"
                  alt="discount-icon"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </span>
          ) : null}
        </CardContent>
        <CardHeader className="p-4 min-h-[160px] max-h-[160px] h-full justify-between">
          <CardTitle className="mt-4 md:mt-0 text-right text-sm md:text-base font-titles">
            {product.title}
          </CardTitle>
          <CardContent className="p-1">
            <ProductPrice
              price={product.price}
              discount={product.discount}
              isInSlider={true}
            />
          </CardContent>
        </CardHeader>
      </Link>
    </Card>
  );
};

export default CarouselBoxCard;
