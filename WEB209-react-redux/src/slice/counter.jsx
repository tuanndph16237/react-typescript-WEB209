import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 100 },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    increaseByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, increaseByAmount } = counterSlice.actions;
export default counterSlice.reducer;
