import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quatity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      }else{
          existingItem.quatity++;
          existingItem.totalPrice = totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state,action) {
        const id= action.payload;
        const existingItem = state.items.find(item => item.id === id);
        state.totalQuantity--;
        if(existingItem.quatity === 1 ){
            state.items = state.items.filter(item => item.id !== id);
        }else{
            existingItem.quatity--;
            // existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        }
    },
  },
});


export const cartActions = cartSlice.actions;

export default cartSlice;
