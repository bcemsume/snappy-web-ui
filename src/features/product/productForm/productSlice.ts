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
      debugger;
      state.data = action.payload.Data ?? undefined;
      state.loading = false;
      state.errors = action.payload.Message;
      state.isSuccess = action.payload.IsSucceeded;
    },
    updateProduct(state, action: PayloadAction<ResponseModel<Product>>) {
      state.data = action.payload.Data ?? undefined;
      state.loading = false;
      state.errors = action.payload.Message;
      state.isSuccess = action.payload.IsSucceeded;
    },
    deleteProduct(state, action: PayloadAction<Product>) {},
    resetState(state) {
      state.data = undefined;
      state.loading = false;
      state.errors = "";
      state.isSuccess = true;
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
  let data = await axios.get<ResponseModel<Product>>(`product/${id}`);
  dispatch(productSlice.actions.getProduct(data.data));
  dispatch(productSlice.actions.setLoading(false));
};

export const resetState = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(productSlice.actions.resetState());
};

export const addProduct = (product: Product): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(productSlice.actions.setLoading(true));
  const response = await axios.post<ResponseModel<Product>>("product", product);
  dispatch(productSlice.actions.addProduct(response.data));
  dispatch(productSlice.actions.setLoading(false));
};

export const updateProduct = (product: Product): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(productSlice.actions.setLoading(true));
  const response = await axios.put<ResponseModel<Product>>(
    `product/${product.ID}`,
    product
  );
  dispatch(productSlice.actions.updateProduct(response.data));
  dispatch(productSlice.actions.setLoading(false));
};

export default productSlice.reducer;
