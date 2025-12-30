import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from '../features/categories/categorySlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  }
});