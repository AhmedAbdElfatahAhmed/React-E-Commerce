import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCounter: 0,
  totalPrice: 0,
  cartList: [],
  isItemAdded: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const addedItem = action.payload;
      state.cartCounter += 1;
      const itemIndex = state.cartList.findIndex(
        (item) => item.id === addedItem.id
      );
      if (itemIndex >= 0) {
        state.isItemAdded = false;
      } else {
        state.cartList.push(addedItem);
        state.isItemAdded = true;
      }
      state.totalPrice += addedItem.price;
      // console.log(state.isItemAdded)
    },
    removeFromCart: (state, action) => {
      state.cartCounter -= 1;
      const ID = action.payload;
      const targetItem = state.cartList.find((item) => item.id === ID);
      state.cartList = state.cartList.filter((item) => item.id !== ID);
      state.totalPrice -= targetItem.price;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
