import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartIcon = () => {
  return (
    <Link
      href="/cart"
      className="relative flex items-center md:pr-6 md:border-r-2 md:border-r-foreground/40 z-50"
    >
      <AiOutlineShoppingCart style={{ fontSize: "2em" }} />
    </Link>
  );
};

export default CartIcon;
