// Creating a slice
// an initial state value,
// and one or more reducer functions to define
//Vamilla(older) Redux => DON'T MUTATE STATE returning is not mandatory
//const newState=[...state];        (Immer js)
//newState.push(action.payload);
//return newState;
//Redux Toolkit
//We have to mutate the state here

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state) => {
      state.items.pop();
    },
    clearItems: (state) => {
      state.items.length = 0;
    },
  },
});

// actions
export const { addItems, removeItems, clearItems } = cartSlice.actions;

//reducer
export default cartSlice.reducer;
