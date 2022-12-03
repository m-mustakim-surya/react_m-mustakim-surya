import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiAbout from "../apis/AboutAPI";

const initialState = {
  data: [],
  status: false,
  fecthStatus: "idle",
  error: null,
};

export const FetchAbout = createAsyncThunk("get/about", async () => {
  const res = await ApiAbout.getAllAbout();
  return res.data.weekly3_about;
});

const SliceAbout = createSlice({
  name: "about",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(FetchAbout.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.data = action.payload;
      })
      .addCase(FetchAbout.rejected, (state, action) => {
        state.fecthStatus = "failed";
        state.err = action.error.message;
      });
  },
});

export default SliceAbout.reducer;
