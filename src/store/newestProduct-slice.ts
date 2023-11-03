// Instruments //
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types //
import { INewestProducts, IProduct } from "@/types/products";

const initialState: INewestProducts = {
  newestProducts: [],
};

const newestProductsSlice = createSlice({
  name: "newestProducts",
  initialState,
  reducers: {
    addProducts(state, action: PayloadAction<IProduct[]>) {
      state.newestProducts = action.payload;
    },
  },
});

export const newestProductsActions = newestProductsSlice.actions;

export default newestProductsSlice.reducer;
