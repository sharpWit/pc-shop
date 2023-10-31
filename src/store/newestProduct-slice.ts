// Instruments //
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types //
import { IProduct } from "@/types/products";
import { IProductList } from "@/types/productList";

const initialState: IProductList = {
  productsList: [],
};

const newestProductsSlice = createSlice({
  name: "newestProducts",
  initialState,
  reducers: {
    addProducts(state, action: PayloadAction<IProduct[]>) {
      state.productsList = action.payload;
    },
  },
});

export const newestProductsActions = newestProductsSlice.actions;

export default newestProductsSlice.reducer;
