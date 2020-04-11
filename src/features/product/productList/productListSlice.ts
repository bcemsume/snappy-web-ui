import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, AppDispatch } from "../../../redux";
import { ProductListState, Product } from "../types";

const initialState: ProductListState = {
  data: [],
  errors: undefined,
  loading: false,
};

const productListSlice = createSlice({
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
  dispatch(productListSlice.actions.setLoading(true));
  dispatch(productListSlice.actions.getProducts(data));
  dispatch(productListSlice.actions.setLoading(false));
};

export const data: Product[] = [
  {
    id: 1,
    description: "Filtre Kahve",
    price: 10.5,
    finishDate: "2030-01-01",
    restaurantId: 1,
  },
  {
    id: 2,
    description: "Latte",
    price: 11.5,
    finishDate: "2030-01-01",
    restaurantId: 1,
  },
  {
    id: 3,
    description: "Mocha",
    price: 13.5,
    finishDate: "2030-01-01",
    restaurantId: 1,
  },
];
export default productListSlice.reducer;
