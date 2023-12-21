"use client";

// Cores //
import { useSelector, useDispatch } from "react-redux";

// States //
import { favoriteActions } from "@/store/favorite-slice";

// Icons //
import { FileHeart, CalendarHeart, Share2 } from "lucide-react";

// Types //
import { IProduct } from "@/types/products";
import { IFavoriteRootState } from "@/types/favorite";

interface Props {
  product: IProduct;
}
const ProductPageActions: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector(
    (state: IFavoriteRootState) => state.favorite.items
  );
  const isInFavorite = favoriteItems.some((item) => item.id === product.id);
  let FavoriteIcon = isInFavorite ? FileHeart : CalendarHeart;
  function toggleFavoriteHandler() {
    !isInFavorite
      ? dispatch(favoriteActions.addToFavorite(product))
      : dispatch(favoriteActions.removeFromFavorite(product.id));
  }
  return (
    <div className="py-4 -mt-6 flex flex-row lg:flex-col lg:justify-evenly lg:absolute lg:top-0 lg:right-0 md:static rounded-lg z-10">
      <div
        className="hover:text-rose-600 transition-colors px-2 md:px-6 py-3 "
        onClick={toggleFavoriteHandler}
      >
        <FavoriteIcon
          style={{
            fontSize: "1.5rem",
            fill: `${isInFavorite ? "#ee384e" : ""}`,
          }}
        />
      </div>
      <div className="hover:text-rose-600 transition-colors px-2 md:px-6 py-3">
        <Share2 style={{ fontSize: "1.5rem" }} />
      </div>
    </div>
  );
};

export default ProductPageActions;
