// store is composed of the entire application's state.

// st  =ore> multiple slices.

// 1 . create a store and give a slice


import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
