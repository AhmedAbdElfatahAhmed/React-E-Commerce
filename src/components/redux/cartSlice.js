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
    removeFromCart: (state, action) => {
      state.cartCounter -= 1;
      const ID = action.payload;
      state.cartList = state.cartList.filter((item) => item.id !== ID);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
