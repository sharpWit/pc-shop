"use client";

// Instruments //
import { useDispatch, useSelector } from "react-redux";

// States //
import { cartActions } from "../../../store/cart-slice";
import { favoriteActions } from "../../../store/favorite-slice";

// Icons //
import { FileHeart, CalendarHeart, Share2, ShoppingBag } from "lucide-react";

// Hooks //
import { useToast } from "@/components/ui/toasts/use-toast";

// Types //
import { IProduct } from "@/types/products";
import { IFavoriteRootState } from "@/types/favorite";

interface Props {
  product: IProduct;
}

const CardActions: React.FC<Props> = ({ product }) => {
  const { toast } = useToast();
  const dispatch = useDispatch();

  const favoriteItems = useSelector(
    (state: IFavoriteRootState) => state.favorite.items
  );
  const isInFavorite = favoriteItems.some((item) => item.id === product.id);
  const FavoriteIcon = isInFavorite ? CalendarHeart : FileHeart;

  function addToCartHandler() {
    dispatch(cartActions.addItemToCart({ product: product, quantity: 1 }));
    toast({
      variant: "success",
      title: "محصول با موفقیت به سبد خرید اضافه شد",
    });
  }

  function toggleFavoriteHandler() {
    !isInFavorite
      ? dispatch(favoriteActions.addToFavorite(product))
      : dispatch(favoriteActions.removeFromFavorite(product.id));
  }

  return (
    <div className="w-full md:w-auto md:h-[130px] flex md:flex-col items-center justify-around rounded-lg md:rounded-full shadow-lg backdrop-filter backdrop-blur-[8px] bg-red-400/30  ">
      <div
        className="hover:text-rose-600 transition-colors sm:px-3 md:px-0"
        onClick={toggleFavoriteHandler}
      >
        <FavoriteIcon
          style={{
            fontSize: "1.2rem",
            fill: `${isInFavorite ? "#ee384e" : ""}`,
          }}
        />
      </div>
      <div className="hover:text-rose-600 transition-colors sm:px-3 md:px-0">
        <Share2 style={{ fontSize: "1.2rem" }} />
      </div>
      <div
        className="hover:text-rose-600 active:scale-125 transition-all sm:px-3 md:px-0"
        onClick={addToCartHandler}
      >
        <ShoppingBag
          style={{
            fontSize: "1.2rem",
          }}
        />
      </div>
    </div>
  );
};

export default CardActions;
