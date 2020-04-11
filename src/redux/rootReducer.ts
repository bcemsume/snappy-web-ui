import { combineReducers } from "@reduxjs/toolkit";
import restaurant from "../features/restaurant/restaurantSlice";
const rootReducer = combineReducers({ restaurant });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
