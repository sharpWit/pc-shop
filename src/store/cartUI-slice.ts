// Instruments //
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types //
import { ICartUI } from "@/types/cart";

const initialState: ICartUI = {
  cartBoxIsVisible: false,
};

const cartUiSlice = createSlice({
  name: "cartUi",
  initialState,
  reducers: {
    toggleCartBox(state, action: PayloadAction<boolean>) {
      state.cartBoxIsVisible = action.payload;
    },
  },
});

export const cartUiActions = cartUiSlice.actions;

export default cartUiSlice.reducer;
