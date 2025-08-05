//* Purpose and Behavior
// Combining the slice reducers into the root reducer
// Creating the middleware enhancer, usually with the thunk middleware or other side effects middleware, as well as middleware that might be used for development checks
// Adding the Redux DevTools enhancer, and composing the enhancers together
// Calling createStore

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
