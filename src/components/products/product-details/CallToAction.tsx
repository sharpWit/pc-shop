"use client";

// Cores //
import { useEffect, useState } from "react";

// Instruments //
import { useDispatch } from "react-redux";

// States //
import { cartActions } from "@/store/cart-slice";

// Icons //
import { ShoppingBag, Plus, Minus } from "lucide-react";

// Components //
import { useToast } from "@/components/ui/toasts/use-toast";
import ProductPrice from "@/components/products/ProductPrice";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/Card";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/form/InputField";

// Types //
import { IProduct } from "@/types/products";

interface Props {
  product: IProduct;
}
const CallToAction: React.FC<Props> = ({ product }) => {
  const { price, discount } = product;
  const [counter, setCounter] = useState(1);
  const { toast } = useToast();

  useEffect(() => {
    return () => {
      setCounter(1);
    };
  }, [product]);

  const dispatch = useDispatch();

  function addToCartHandler() {
    dispatch(
      cartActions.addItemToCart({
        product: product,
        quantity: counter,
      })
    );
    toast({
      variant: "success",
      title: "محصول با موفقیت به سبد خرید اضافه شد",
    });
  }

  function increment() {
    if (counter < 10) {
      setCounter((prev) => prev + 1);
    }
  }
  function decrement() {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  }

  function onInputNumberChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (+e.currentTarget.value >= 1 && +e.currentTarget.value <= 10) {
      setCounter(+e.currentTarget.value);
    }
  }

  return (
    <Card className="w-full md:w-1/2 mt-2">
      <CardHeader>
        <CardTitle>
          <ProductPrice price={price} discount={discount} isLargeSize={true} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center cursor-pointer">
          <div className="p-2" onClick={increment}>
            <Plus />
          </div>
          <InputField
            className="inline-block w-[70px] rtl:pr-8 ltr:pl-7 py-2 mx-1 sm:mx-4 border-[1px] border-gray-400"
            type="number"
            min={1}
            max={10}
            value={counter}
            onChange={onInputNumberChangeHandler}
          />
          <div onClick={decrement} className="p-2">
            <Minus />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={addToCartHandler}>
          <ShoppingBag className="ml-1" />
          اضافه به سبد خرید
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CallToAction;
