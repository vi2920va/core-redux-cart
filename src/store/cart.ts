import { createSlice } from '@reduxjs/toolkit';
import { CartItemProps } from 'data/CART_ITEM.type';

const cart = createSlice({
  name: 'cart',
  initialState: [] as CartItemProps[],
  reducers: {
    addCart: (state, action) => {
      state.push(action.payload);
    },
    deleteItem: () => {},
  },
});

export default cart;
