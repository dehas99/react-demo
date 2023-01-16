import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./conterSlice";

export const store = configureStore({
  reducer: { counter: counterReducer },
});
