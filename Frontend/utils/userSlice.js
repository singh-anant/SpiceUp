import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
  },
  reducers: {
    addUser: (state, action) => {
      state.username = action.payload;
    },
    removeUser: (state, action) => {
      state.username = "";
    },
  },
});

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
