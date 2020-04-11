import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, AppDispatch } from "../../../redux";
import { Product, ProductState } from "../types";

const initialState: ProductState = {
  data: {
    id: 0,
    description: "",
    price: "",
    finishDate: "",
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
    addProduct(state, action: PayloadAction<Product>) {},
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
