import { configureStore } from "@reduxjs/toolkit";
import categorySlice  from "../features/categoriesSlice";
import  newsSlice  from "../features/newsSlice";

export const store = configureStore({
    reducer: {
        category: categorySlice,
        newsReducer: newsSlice
    }
})