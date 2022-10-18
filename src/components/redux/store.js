import { configureStore } from "@reduxjs/toolkit";
import { counterNumberSlice } from "./counterNumberSlice";
// console.log("slice",counterNumberSlice)
export const store = configureStore({
  // reducers
  reducer: {
    counterStore: counterNumberSlice.reducer,
  },
});
