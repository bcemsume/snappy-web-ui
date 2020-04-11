import { combineReducers } from "@reduxjs/toolkit";
import restaurant from "../features/restaurant/restaurantSlice";
import productList from "../features/product/productList/productListSlice";
import product from "../features/product/productForm/productSlice";

const rootReducer = combineReducers({ restaurant, productList, product });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
