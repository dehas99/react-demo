import { createSlice } from "@reduxjs/toolkit";

export const conterSlice = createSlice({
  name: "counter",

  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = conterSlice.actions;
export default conterSlice.reducer;
