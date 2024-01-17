import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFilteredProducts } from "../api/filteredCategories";
import { getSubCategories } from "../api/subcategories";
import { instance } from "../api";
const initialState = {
  filteredProducts: {
    selectedCategory: "",
    filteredProductsAccordingCategories: {},
    pageNum: 1,
    selectedSubCategories: [],
    sort: "",
    subCategories: [],
    searchProduct: "",
  },
};

export const getFilteredProductsAccordingCategories = createAsyncThunk(
  "products/getFilteredProductsAccordingCategories",
  async ({
    pageNum,
    selectedCategory,
    selectedSubCategories,
    sort,
    searchProduct,
  }) => {
    console.log();
    const response = await getFilteredProducts(
      pageNum,
      selectedCategory,
      selectedSubCategories,
      sort,
      searchProduct
    );
    return await response.data;
  }
);

export const getAllSubCategories = createAsyncThunk(
  "subcategories/getAllSubCategories",
  async ({selectedCategory}, { rejectWithValue }) => {
    try {
      const response = await getSubCategories(selectedCategory);
      return await response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const filterSlice = createSlice({
  name: "filteredProduct",
  initialState: initialState,
  reducers: {
    selectCategory: (state, { payload }) => {
      state.filteredProducts.selectedCategory = payload;
      state.filteredProducts.pageNum = 1;
    },
    prevPage: (state, { payload }) => {
      if (state.filteredProducts.pageNum > 1) {
        state.filteredProducts.pageNum -= 1;
      } else {
        state.filteredProducts.pageNum =
          state.filteredProducts.filteredProductsAccordingCategories.meta.pagination.pageCount;
      }
    },
    nextPage: (state, { payload }) => {
      if (
        state.filteredProducts.pageNum <
        state.filteredProducts.filteredProductsAccordingCategories.meta
          .pagination.pageCount
      ) {
        state.filteredProducts.pageNum += 1;
      } else {
        state.filteredProducts.pageNum = 1;
      }
    },
    currentPage: (state, { payload }) => {
      state.filteredProducts.pageNum = payload;
    },
    selectSort: (state, { payload }) => {
      state.filteredProducts.sort = payload;
    },
    handleChange: (state, { payload }) => {
      if (payload.isChecked) {
        state.filteredProducts.selectedSubCategories.push(payload.value);
      } else {
        state.filteredProducts.selectedSubCategories.splice(
          state.filteredProducts.selectedSubCategories.indexOf(payload.value),1
        );
        }
    },
    resetFiltration: (state) => {
      state.filteredProducts = initialState.filteredProducts
    },
    searchData: (state,{payload}) => {
      state.filteredProducts.searchProduct = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getFilteredProductsAccordingCategories.fulfilled,
        (state, { payload }) => {
          state.filteredProducts.filteredProductsAccordingCategories = payload;
        }
      )
      .addCase(getAllSubCategories.fulfilled, (state, { payload }) => {
        state.filteredProducts.subCategories = payload;
      })
  },
});

export const {
  selectCategory,
  prevPage,
  nextPage,
  currentPage,
  selectSort,
  handleChange,
  resetFiltration,
  searchData,
} = filterSlice.actions;

export default filterSlice.reducer;
