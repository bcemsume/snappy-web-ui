import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, AppDispatch } from "../../../redux";
import { Product, ProductState } from "../types";
import { data } from "../productList/productListSlice";
import axios from "axios";
const initialState: ProductState = {
  data: {
    id: 0,
    description: "",
    price: 0,
    finishDate: "",
    restaurantId: 1,
  },
  errors: undefined,
  loading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct(state, action: PayloadAction<Product>) {
      state.data = action.payload;
      state.loading = false;
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.data = action.payload;
    },
    updateProduct(state, action: PayloadAction<Product>) {},
    deleteProduct(state, action: PayloadAction<Product>) {},
    resetState(state) {
      state.data = undefined;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const getProduct = (id: number): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(productSlice.actions.setLoading(true));
  let prd: Product = data.find((x) => x.id === id) as Product;
  dispatch(productSlice.actions.getProduct(prd));
};

export const resetState = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(productSlice.actions.resetState());
};

export const addProduct = (product: Product): AppThunk => async (
  dispatch: AppDispatch
) => {
  debugger;
  product.restaurantId = 1;
  const response = await axios.post(
    "http://localhost:4000/api/product",
    product
  );
  debugger;
  dispatch(productSlice.actions.addProduct(product));
};

export default productSlice.reducer;
