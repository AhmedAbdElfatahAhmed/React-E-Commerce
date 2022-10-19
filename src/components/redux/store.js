import { configureStore } from "@reduxjs/toolkit";
import { counterNumberSlice } from "./counterNumberSlice";
import { cartSlice } from "./cartSlice";
// console.log("slice",counterNumberSlice)
export const store = configureStore({
  // reducers
  reducer: {
    counterStore: counterNumberSlice.reducer,
    cartStore: cartSlice.reducer,
  },
});
