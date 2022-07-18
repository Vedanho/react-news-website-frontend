import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  error: null,
  commentsLoading: false,
};

export const getComments = createAsyncThunk(
  "get/comments",
  async (thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4500/comment");
      const data = await res.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addComment = createAsyncThunk(
  "add/comment",
  async ({ text, newsId, user_id }, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:4500/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          text: text,
          news: newsId,
          user: user_id,
        }),
      });

      const data = await res.json();

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "delete/comment",
  async (id, thunkAPI) => {
    const token = localStorage.getItem("token")
    try {
      const res = await fetch(`http://localhost:4500/comment/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      
      return id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
);

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.error = null;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
        state.error = null;
        state.commentsLoading = false;
      })
      .addCase(addComment.pending, (state, action) => {
        state.commentsLoading = true;
      })
      .addCase(addComment.rejected, (state, action) => {
        state.error = action.payload;
        state.commentsLoading = false;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.comments = state.comments.filter((element) => {
          return element._id !== action.payload
        })
      })
  },
});

export default commentSlice.reducer;
