import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCounter: 0,
  cartList: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartCounter += 1;
      state.cartList.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
