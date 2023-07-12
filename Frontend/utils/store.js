import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.js";
import amountSlice from "./amountSlice.js";
import authSlice from "./authSlice.js";
import userSlice from "./userSlice.js";

const store = configureStore({
  // slices
  reducer: {
    cart: cartSlice,
    amount: amountSlice,
    auth: authSlice,
    user: userSlice,
  },
});

export default store;
