"use client";

// Icons //
import { ShoppingCart } from "lucide-react";

// Instruments //
import { useSelector } from "react-redux";

// Components //
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet/Sheet";
import CartBox from "./CartBox";

// Types //
import { ICartRootState } from "@/types/cart";

const CartIcon = () => {
  const cartItemQuantity = useSelector(
    (state: ICartRootState) => state.cart.totalQuantity
  );

  return (
    <Sheet>
      <div className="relative flex items-center lg:pr-4 lg:border-r-2 lg:border-r-foreground/40 z-50">
        <SheetTrigger>
          <ShoppingCart />
        </SheetTrigger>
        <span className="absolute -top-3 -right-[0.3rem] md:right-[1rem] flex items-center justify-center w-5 h-5 pt-[0.1rem] rounded-full bg-accent-foreground text-[0.75rem] leading-3 text-accent shadow-lg">
          {cartItemQuantity}
        </span>
      </div>

      <SheetContent className="z-[1000] p-0 overflow-y-auto font-main">
        <CartBox />
      </SheetContent>
    </Sheet>
  );
};

export default CartIcon;
