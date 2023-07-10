import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.js";
import amountSlice from "./amountSlice.js";

const store = configureStore({
  // slices
  reducer: {
    cart: cartSlice,
    amount: amountSlice,
  },
});

export default store;
