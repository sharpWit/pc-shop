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

interface Props {
  product: IProduct;
}

const CarouselBoxCard = ({ product }: Props) => {
  return (
    <Card className="w-auto h-auto ml-2 backdrop-filter backdrop-blur-[10px]">
      <Link
        href={`/${product.slug}/${product.subSlug}/${product.groupTitle}/${product.enTitle}`}
        className="min-w-[200px] max-w-[200px]"
      >
        <CardContent className="h-[185px] relative">
          {product?.img[0] && (
            <Image
              src={product?.img[0]}
              alt={product.title}
              fill
              className="object-contain hover:scale-105 transition-transform !p-2"
            />
          )}
          {product.isOffer ? (
            <span className="block absolute top-2 right-2">
              <Image
                src="/images/discount-icon/discount.webp"
                width={40}
                height={40}
                alt="discount-icon"
              />
            </span>
          ) : null}
        </CardContent>
        <CardHeader className="h-[185px] text-right justify-between">
          <CardTitle className="text-lg font-titles">{product.title}</CardTitle>
          <CardDescription>
            <ProductPrice
              price={product.price}
              discount={product.discount}
              isInSlider={true}
            />
          </CardDescription>
        </CardHeader>
      </Link>
    </Card>
  );
};

export default CarouselBoxCard;
