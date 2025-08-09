import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

// we tell the store to use this slice reducer function to handle all updates to that state.
const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;
