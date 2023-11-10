// Instruments //
import { configureStore } from "@reduxjs/toolkit";
import { middleware } from "./middleware";

// Slices //
import specialOfferProductsReducer from "./specialOfferProducts-slice";
import cartSliceReducer from "./cart-slice";
import favoriteReducer from "./favorite-slice";
import SortedProductsListReducer from "./sortedProductList-slice";
import newestProductReducer from "./newestProduct-slice";
// import sideNavBarReducer from "./sideNavBar-slice";
// import cartUiReducer from "./cartUI-slice";
// import userInfoReducer from "./user-slice";

const store = configureStore({
  reducer: {
    specialOfferProductsList: specialOfferProductsReducer,
    cart: cartSliceReducer,
    favorite: favoriteReducer,
    sortedProductsList: SortedProductsListReducer,
    newestProductsList: newestProductReducer,
    // sideNavBar: sideNavBarReducer,
    // cartUi: cartUiReducer,
    // userInfo: userInfoReducer,
  },

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: process.env.NODE_ENV !== "production",
  //   }).concat(middleware),
  devTools: true,
});

export default store;
