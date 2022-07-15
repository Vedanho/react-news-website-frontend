import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  signingUp: false,
  signingIn: false,
  successRegist: false,
  error: null,
  error_auth: null,
  token: localStorage.getItem("token"),
};

export const getUsers = createAsyncThunk("get/users", async (thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4500/user");
    const users = await res.json();

    return users;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const regist = createAsyncThunk(
  "regist/users",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4500/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          login,
          password,
        }),
      });
      const data = await res.json();

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const auth = createAsyncThunk(
  "auth/user",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4500/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          login,
          password,
        }),
      });

      const data = await res.json();

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);

      return data.token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const cleanToken = createAsyncThunk("clean/token", async (thunkAPI) => {
  localStorage.removeItem("token");
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(auth.fulfilled, (state, action) => {
        state.token = action.payload;
        state.signingIn = false;
        state.error_auth = false;
      })
      .addCase(auth.pending, (state, action) => {
        state.signingIn = true;
        state.error_auth = false;
      })
      .addCase(auth.rejected, (state, action) => {
        state.error_auth = action.payload;
        state.signingIn = false;
      })
      .addCase(cleanToken.fulfilled, (state, action) => {
        state.token = null;
        state.signingIn = false;
      })
      .addCase(regist.fulfilled, (state, action) => {
        state.signingUp = false;
        state.successRegist = true;
      })
      .addCase(regist.pending, (state, action) => {
        state.signingUp = true;
      })
      .addCase(regist.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
