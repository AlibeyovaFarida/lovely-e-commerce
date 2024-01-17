import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../api";
export const getWishProducts = createAsyncThunk(
  "wish/getWishProducts",
  async () => {
    try {
      const response = await instance.get(
        `${import.meta.env.VITE_BASE_URL}/api/products?populate=*&[filters][isWish][$eq]=true`
      );
      return response.data.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
const initialState = {
  wishProducts: [],
  error: null,
  loading: false,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWishProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWishProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.wishProducts = payload;
      })
      .addCase(getWishProducts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
