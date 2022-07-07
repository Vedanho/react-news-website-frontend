import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: [],
};

export const fetchNews = createAsyncThunk("fetch/news", async (thunkApi) => {
  try {
    const res = await fetch("http://localhost:4500/new");

    const news = await res.json();
    return news;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.news = action.payload;
    });
  },
});

export default newsSlice.reducer;
