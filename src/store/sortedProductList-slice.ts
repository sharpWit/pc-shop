// Instruments //
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Utilities //
import { sortByCheapest, sortByExpensive } from "@/utils/sortByCost";
import { sortByPoPularity } from "@/utils/sortByPopularity";
import { newestProductsFn } from "@/utils/sortByTimeStamp";

// Types //
import { IProductList } from "@/types/productList";
import { IProduct } from "@/types/products";

const initialState: IProductList = {
  productsList: [],
};

const SortedProductsListSlice = createSlice({
  name: "sortedProductsList",
  initialState,
  reducers: {
    sortProductsList(
      state,
      action: PayloadAction<{ productsList: IProduct[]; sortBasedOn: string }>
    ) {
      switch (action.payload.sortBasedOn) {
        case "all":
          state.productsList = action.payload.productsList;
          break;
        case "newestProducts": {
          state.productsList = newestProductsFn(state.productsList);
          break;
        }
        case "popular": {
          state.productsList = state.productsList.sort(sortByPoPularity);
          break;
        }
        case "cheapest": {
          state.productsList = state.productsList.sort(sortByCheapest);
          break;
        }
        case "expensive": {
          state.productsList = state.productsList.sort(sortByExpensive);
          break;
        }
      }
    },
  },
});
export const SortedProductsListActions = SortedProductsListSlice.actions;

export default SortedProductsListSlice.reducer;
