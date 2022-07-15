import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../features/categoriesSlice";
import commentSlice from "../features/commentSlice";
import newsSlice from "../features/newsSlice";
import userSlice from "../features/userSlice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
    newsReducer: newsSlice,
    userReducer: userSlice,
    commentsReducer: commentSlice,
  },
});
