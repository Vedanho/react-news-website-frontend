import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  proccess: false,
};

export const fetchCategories = createAsyncThunk(
  "fetch/categories",
  async (thunkApi) => {
    try {
      const res = await fetch("http://localhost:4500/category");
      const categories = await res.json();

      return categories;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.proccess = false;
      })
      .addCase(fetchCategories.pending, (state, action) => {
        state.proccess = true;
      });
  },
});

export default categorySlice.reducer;
