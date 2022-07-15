import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: [],
  comments: [],
  loading: false,
  proccess: false,
  downoload: false,
  certainNews: null,
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

export const getNewsById = createAsyncThunk(
  "fetch/newsById",
  async (id, thunkApi) => {
    try {
      const res = await fetch(`http://localhost:4500/new/${id}`);
      const news = await res.json();

      return news;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.loading = true;
        state.proccess = false;
        state.downoload = false;
      })
      .addCase(fetchNews.pending, (state, action) => {
        state.proccess = true;
      })
      .addCase(getNewsById.fulfilled, (state, action) => {
        state.certainNews = action.payload;
        state.proccess = true;
        state.downoload = false;
      })
      .addCase(getNewsById.pending, (state, action) => {
        state.downoload = true;
      });
  },
});

export default newsSlice.reducer;
