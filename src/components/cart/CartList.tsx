"use client";

// Cores //
import React from "react";

// Instruments //
import { useSelector } from "react-redux";

// Components //
import CartItem from "./CartItem";

// Types //
import { ICartRootState, ICartProduct } from "@/types/cart";

const CartList = () => {
  const cartItems = useSelector((state: ICartRootState) => state.cart.items);
  return (
    <div className="w-full flex items-center gap-2 mx-4 overflow-x-auto">
      {cartItems.length
        ? cartItems.map((cartItem: ICartProduct) => {
            return <CartItem key={cartItem.id} product={cartItem} />;
          })
        : null}
    </div>
  );
};

export default CartList;
