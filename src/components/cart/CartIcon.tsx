// Cores //
import React from "react";
import Link from "next/link";

// Icons //
import { ShoppingCart } from "lucide-react";

const CartIcon = () => {
  return (
    <Link
      href="/cart"
      className="relative flex items-center lg:pr-4 lg:border-r-2 lg:border-r-foreground/40 z-50"
    >
      <ShoppingCart />
    </Link>
  );
};

export default CartIcon;
