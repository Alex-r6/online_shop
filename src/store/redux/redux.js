import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productReducer";


export const store = configureStore({
  reducer: {
    products: productsReducer
  },
});