import { IProduct } from "@/types/products";
import { FC, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card/Card";
import Image from "next/image";
import { AspectRatio } from "../ui/AspectRetio";
import Link from "next/link";
import ProductPrice from "../products/ProductPrice";
import { useDispatch, useSelector } from "react-redux";
import { ICartRootState } from "@/types/cart";
import { cartActions } from "@/store/cart-slice";
import { Plus, Minus, Trash2 } from "lucide-react";

interface Props {
  product: IProduct;
}

const CartItem: FC<Props> = ({ product }) => {
  const productQuantity = useSelector(
    (state: ICartRootState) =>
      state.cart.items.find((item) => item.id === product.id)?.quantity
  );

  const [counter, setCounter] = useState(productQuantity);

  const dispatch = useDispatch();

  function increment(product: IProduct) {
    setCounter((prev) => ++prev!);
    dispatch(cartActions.addItemToCart({ product: product, quantity: 1 }));
  }

  function decrement(id: string) {
    setCounter((prev) => --prev!);
    dispatch(cartActions.removeItemFromCart(id));
  }

  function onInputNumberChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (+e.currentTarget.value >= 1 && +e.currentTarget.value <= 10) {
      setCounter(+e.currentTarget.value);
    }
  }

  return (
    <Card className="flex flex-col justify-between mx-auto py-4 max-h-max h-full shadow-md">
      <CardContent className="p-2">
        <Link
          href={`/${product.slug}/${product.subSlug}/${product.groupTitle}/${product.enTitle}`}
        >
          <div className="w-full p-3">
            <AspectRatio ratio={1 / 1}>
              <Image
                fill
                src={product.img[0]}
                alt={product.title}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                className="rounded-md object-contain drop-shadow-xl hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </AspectRatio>
          </div>
        </Link>
        <CardTitle className="text-sm md:text-base font-titles">
          {product.title}
        </CardTitle>
      </CardContent>

      <CardContent>
        <div className="flex-grow my-2 sm:my-0">
          <div className="flex items-center justify-start lg:justify-center cursor-pointer">
            <div className="p-2" onClick={() => increment(product)}>
              <Plus />
            </div>
            <input
              className="inline-block w-[65px] rtl:pr-7 ltr:pl-7 py-2 mx-1 border-[1px] border-gray-400"
              type="number"
              min={1}
              max={10}
              value={counter}
              onChange={onInputNumberChangeHandler}
            />
            {counter === 1 ? (
              <div onClick={() => decrement(product.id)} className="p-1">
                <Trash2 />
              </div>
            ) : (
              <div onClick={() => decrement(product.id)} className="p-1">
                <Minus />
              </div>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <p className="p-1">قیمت کل:</p>
        <ProductPrice
          price={product.price * counter!}
          discount={product.discount}
        />
      </CardFooter>
    </Card>
  );
};
export default CartItem;
