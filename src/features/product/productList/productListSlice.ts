import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, AppDispatch } from "../../../redux";
import { ProductListState, Product } from "../types";
import ResponseModel from "../../../shared/ResponseModel";
import axios from "axios";
import moment from "moment";

const initialState: ProductListState = {
  data: [],
  errors: undefined,
  loading: false,
  isSuccess: undefined,
};

const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    getProducts(state, action: PayloadAction<ResponseModel<Product[]>>) {
      action.payload?.Data.forEach(
        (x) => (x.FinishDate = moment(x.FinishDate as any).format("DD.MM.YYYY"))
      );
      state.data = action.payload.Data ?? undefined;
      state.loading = false;
      state.errors = action.payload.Message;
      state.isSuccess = action.payload.IsSucceeded;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      // state = { ...initialState };
      state.loading = action.payload;
    },
    deleteProduct(state, action: PayloadAction<ResponseModel<Product>>) {
      state.loading = false;
      state.isSuccess = action.payload.IsSucceeded;
      state.errors = action.payload.Message;
    },
  },
});

export const getProducts = (restaurantId: number): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(productListSlice.actions.setLoading(true));
  const response = await axios.get<ResponseModel<Product[]>>(
    `restaurant/${restaurantId}/products`
  );
  dispatch(productListSlice.actions.getProducts(response.data));
  dispatch(productListSlice.actions.setLoading(false));
};

export const deleteProduct = (id: number): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(productListSlice.actions.setLoading(true));
  const response = await axios.delete<ResponseModel<Product>>(`product/${id}`);
  dispatch(productListSlice.actions.deleteProduct(response.data ?? {}));
  dispatch(productListSlice.actions.setLoading(false));
};

export default productListSlice.reducer;
