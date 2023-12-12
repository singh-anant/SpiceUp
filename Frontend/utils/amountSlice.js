import { createSlice } from "@reduxjs/toolkit";

const amountSlice = createSlice({
  name: "amount",
  initialState: {
    totalPrice: 0,
  },
  reducers: {
    addMoney: (state, action) => {
      state.totalPrice += action.payload;
    },
    subtractMoney: (state, action) => {
      state.totalPrice -= action.payload;
    },
    clearMoney: (state) => {
      state.totalPrice = 0;
    },
  },
});

export default amountSlice.reducer;
export const { addMoney, subtractMoney, clearMoney } = amountSlice.actions;
