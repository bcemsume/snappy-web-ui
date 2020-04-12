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
  name: "product",
  initialState,
  reducers: {
    getProduct(state, action: PayloadAction<Product>) {
      state.loading = false;
    },
    getProducts(state, action: PayloadAction<Product[]>) {
      action.payload?.forEach(
        (x) => (x.FinishDate = moment(x.FinishDate as any).format("DD.MM.YYYY"))
      );
      state.data = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const getProducts = (restaurantId: number): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(productListSlice.actions.setLoading(true));
  const response = await axios.get<ResponseModel<Product[]>>(
    `http://localhost:4000/api/restaurant/${restaurantId}/products`
  );
  dispatch(productListSlice.actions.getProducts(response.data.Data));
  dispatch(productListSlice.actions.setLoading(false));
};

export default productListSlice.reducer;
