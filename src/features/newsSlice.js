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

export const createNews = createAsyncThunk(
  "create/news",
  async ({ title, text, category, picture }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4500/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          text,
          category,
          picture,
        }),
      });

      const data = await res.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
      })
      .addCase(createNews.fulfilled, (state, action) => {
        state.news.push(action.payload)
      })
  },
});

export default newsSlice.reducer;
