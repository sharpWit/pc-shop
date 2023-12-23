"use client";

// Cores //
import Link from "next/link";

// Instruments //
import { useSelector } from "react-redux";

// Hooks //
import { useExchangeRateGBPToIRR } from "@/hooks/useExchangeRateGBPToIRR";

// Components //
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/Card";
import CartItem from "./CartItem";
import { Button } from "../ui/button";

// Utilities //
import { changeNumbersFormatEnToFa } from "@/utils/changeNumbersFormatEnToFa";

// Types //
import { ICartRootState } from "@/types/cart";
import { IUserInfoRootState } from "@/types/user";

const CartBox = () => {
  const cartItemQuantity = useSelector(
    (state: ICartRootState) => state.cart.totalQuantity
  );

  const cartTotalAmount = useSelector(
    (state: ICartRootState) => state.cart.totalAmount
  );

  const cartItems = useSelector((state: ICartRootState) => state.cart.items);

  const userInfo = useSelector(
    (state: IUserInfoRootState) => state.userInfo.userInformation
  );

  const irPrice = useExchangeRateGBPToIRR(cartTotalAmount);

  return (
    <Card className="font-main">
      <CardHeader className="p-3 mt-8">
        <CardTitle>
          <span>{changeNumbersFormatEnToFa(cartItemQuantity)}</span>
          <span className="mr-1 text-sm">محصول</span>
        </CardTitle>

        <CardDescription>
          <span>
            <Link href="/cart" className="text-primary">
              مشاهده سبد خرید
            </Link>
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-2">
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} product={item} />;
          })
        ) : (
          <p className="mt-20 text-center text-muted-foreground">
            سبد خرید خالی است
          </p>
        )}
        <CardFooter className="p-2 mt-2">
          {cartItems.length ? (
            <div className="flex flex-col items-center justify-center space-y-4 w-full p-4 sticky bottom-0 left-0 right-0 bg-input rounded-md">
              <div className="flex flex-col mb-2 p-2 space-y-2 text-sm">
                <p>مبلغ قابل پرداخت</p>
                <p className="self-end font-semibold">{`تومان ${irPrice}`}</p>
              </div>
              {!userInfo ? (
                <Link href="/login">
                  <Button>ورود به حساب کاربری</Button>
                </Link>
              ) : (
                <Link href="/cart">
                  <Button>ادامه فرآیند سفارش خرید</Button>
                </Link>
              )}
            </div>
          ) : null}
        </CardFooter>
      </CardContent>
    </Card>
  );
};
export default CartBox;
