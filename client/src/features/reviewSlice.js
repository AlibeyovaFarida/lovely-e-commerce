import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data:[],
    error: null,
    loading: false,
}

export const getReviews = createAsyncThunk("review/getReviews", async(id, {rejectWithValue}) => {
    try {
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/reviews?filters[productID][$eq]=${id}`)
        return result.data.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});

export const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReview: (state, {payload}) => {
        state.data.push(payload)
    },
    deleteReviews: (state, {payload}) => {
        state.data = state.data.filter((item) => item.id!==payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      })
      .addCase(getReviews.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { addReview, deleteReviews } = reviewSlice.actions;
export default reviewSlice.reducer;