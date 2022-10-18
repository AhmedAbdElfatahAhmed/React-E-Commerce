import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

// reducer
export const counterNumberSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCount: (state, action) => {
      state.counter += action.payload;
    },
    decrementCount: (state, action) => {
      state.counter -= action.payload;
    },
    restCounter: (state) => {
      state.counter = 0;
    },
  },
});

// action
export const { incrementCount, decrementCount, restCounter } =
  counterNumberSlice.actions;
