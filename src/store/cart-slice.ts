// Instruments //
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Utilities //
import { calculateDiscountPercentage } from "@/utils/calculateDiscountPercentage";

// Types //
import { ICart } from "@/types/cart";
import { IProduct } from "@/types/products";

const initialState: ICart = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(
      state: ICart,
      action: PayloadAction<{ product: IProduct; quantity: number }>
    ) {
      const newItem = action.payload.product;

      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity = state.totalQuantity + action.payload.quantity;

      state.totalAmount =
        state.totalAmount +
        action.payload.quantity *
          (action.payload.product.discount
            ? calculateDiscountPercentage(
                action.payload.product.price,
                action.payload.product.discount
              )
            : action.payload.product.price);

      if (!existingItem) {
        const totalPrice =
          (newItem.discount
            ? calculateDiscountPercentage(newItem.price, newItem.discount)
            : newItem.price) * action.payload.quantity;

        state.items.push({
          ...newItem,
          quantity: action.payload.quantity,
          totalPrice,
        });
      } else {
        const totalPrice =
          existingItem.totalPrice +
          (existingItem.discount
            ? calculateDiscountPercentage(
                existingItem.price,
                existingItem.discount
              ) * action.payload.quantity
            : existingItem.price * action.payload.quantity);

        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice = totalPrice;
      }
    },

    removeItemFromCart(
      state: ICart,
      action: PayloadAction<string> //slug.current as payload
    ) {
      const productSlug = action.payload;
      const existingItem = state.items.find((item) => item.id === productSlug);

      state.totalQuantity--;

      state.totalAmount =
        state.totalAmount -
        (existingItem?.discount
          ? calculateDiscountPercentage(
              existingItem.price,
              existingItem.discount
            )
          : existingItem?.price)!;

      if (existingItem?.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== productSlug);
      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice =
          existingItem!.totalPrice -
          (existingItem?.discount
            ? calculateDiscountPercentage(
                existingItem.price,
                existingItem.discount
              )
            : existingItem?.price)!;
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
