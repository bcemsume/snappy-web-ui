import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, AppDispatch } from "../../../redux";
import { Product, ProductState } from "../types";
import axios from "axios";
import ResponseModel from "../../../shared/ResponseModel";
import moment from "moment";
import { getProducts } from "../productList/productListSlice";

const initialState: ProductState = {
  data: {
    ID: 0,
    Description: "",
    Price: 0,
    FinishDate: "",
    RestaurantID: 0,
  },
  errors: undefined,
  loading: false,
  isSuccess: undefined,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct(state, action: PayloadAction<ResponseModel<Product>>) {
      action.payload.Data.finishDate = moment(
        action.payload.Data.FinishDate as any
      );
      state.data = action.payload.Data ?? undefined;
      state.loading = false;
      state.errors = action.payload.Message;
      state.isSuccess = action.payload.IsSucceeded;
    },
    addProduct(state, action: PayloadAction<ResponseModel<Product>>) {
      state.data = action.payload.Data ?? undefined;
      state.loading = false;
      state.errors = action.payload.Message;
      state.isSuccess = action.payload.IsSucceeded;
    },
    updateProduct(state, action: PayloadAction<Product>) {},
    deleteProduct(state, action: PayloadAction<Product>) {},
    resetState(state) {
      state.data = undefined;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state = { ...initialState };
      state.loading = action.payload;
    },
  },
});

export const getProduct = (id: number): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(productSlice.actions.setLoading(true));
  let data = await axios.get<ResponseModel<Product>>(
    `http://localhost:4000/api/product/${id}`
  );
  dispatch(productSlice.actions.getProduct(data.data));
};

export const resetState = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(productSlice.actions.resetState());
};

export const addProduct = (product: Product): AppThunk => async (
  dispatch: AppDispatch
) => {
  product.RestaurantID = 1;
  const response = await axios.post<ResponseModel<Product>>(
    "http://localhost:4000/api/product",
    product
  );
  dispatch(productSlice.actions.addProduct(response.data));
  dispatch(getProducts(1));
};

export default productSlice.reducer;
