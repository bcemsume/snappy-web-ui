import { combineReducers } from "@reduxjs/toolkit";
import restaurant from "../features/restaurant/restaurantSlice";
import productList from "../features/product/productList/productListSlice";
import product from "../features/product/productForm/productSlice";
import login from "../features/login/loginSlice";
import campaignList from "../features/campaign/campaignList/campaignListSlice"
import campaign from "../features/campaign/campaignForm/campaignSlice"

const rootReducer = combineReducers({
  restaurant,
  productList,
  product,
  login,
  campaignList,
  campaign
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
