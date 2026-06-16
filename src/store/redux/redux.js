import { configureStore } from "@reduxjs/toolkit";
import backetReducer from "./backetReducer";
import productsReducer from "./productReducer";
import userReducer from "./userReducer";
import settingsReducer from "./settingsReducer"

export const store = configureStore({
  reducer: {
    products: productsReducer,
    backet: backetReducer,
    user: userReducer,
    settings: settingsReducer
  }
});