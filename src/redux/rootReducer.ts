import { combineReducers } from "@reduxjs/toolkit";
import restaurant from "../features/restaurant/restaurantSlice";
import productList from "../features/product/productListSlice";

const rootReducer = combineReducers({ restaurant, productList });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
