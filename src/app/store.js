import { configureStore } from "@reduxjs/toolkit";
import categorySlice  from "../features/categoriesSlice";

export const store = configureStore({
    reducer: categorySlice
})