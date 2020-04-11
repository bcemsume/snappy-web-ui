import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, AppDispatch } from "../../redux";
import { ProductListState, Product } from "./types";

const initialState: ProductListState = {
  data: [],
  errors: undefined,
  loading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct(state, action: PayloadAction<Product>) {
      state.loading = false;
    },
    getProducts(state, action: PayloadAction<Product[]>) {
      state.data = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const getProducts = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(productSlice.actions.setLoading(true));
  dispatch(productSlice.actions.getProducts(data));
  dispatch(productSlice.actions.setLoading(false));
};

export const getProduct = (id: number): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(productSlice.actions.setLoading(true));
};

const data: Product[] = [
  {
    id: 1,
    description: "Filtre Kahve",
    price: "10.5",
    finishDate: "2030-01-01",
  },
  {
    id: 2,
    description: "Latte",
    price: "11.5",
    finishDate: "2030-01-01",
  },
  {
    id: 3,
    description: "Mocha",
    price: "13.5",
    finishDate: "2030-01-01",
  },
];
export default productSlice.reducer;
