import { createSlice } from "@reduxjs/toolkit";

const amountSlice = createSlice({
  name: "amount",
  initialState: {
    totalprice: 0,
  },
  reducers: {
    addMoney: (state, action) => {
      state.totalprice += action.payload;
    },
    subtractMoney: (state, action) => {
      state.totalprice -= action.payload;
    },
    clearMoney: (state) => {
      state.totalprice = 0;
    },
  },
});

export default amountSlice.reducer;
export const { addMoney, subtractMoney, clearMoney } = amountSlice.actions;
