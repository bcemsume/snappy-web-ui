import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, AppDispatch } from "../../redux";
import { RestaurantState, Restaurant } from "./types";
import axios from "axios";
import ResponseModel from "../../shared/ResponseModel";

const initialState: RestaurantState = {
  data: {
    ID: 0,
    Title: "",
    Address: "",
    Email: "",
    PaymentMethods: "",
    Phone: "",
    WorkingDays: "",
  },
  errors: undefined,
  loading: false,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    getRestaurant(state, action: PayloadAction<Restaurant>) {
      state.data = action.payload;
      state.loading = false;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    saveRestaurant(state, action: PayloadAction<RestaurantState>) {},
  },
});

export const getRestaurant = (id: number): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(restaurantSlice.actions.setLoading(true));
  const response = await axios.get<ResponseModel<Restaurant>>(
    `http://localhost:4000/api/restaurant/${id}`
  );
  debugger;
  dispatch(restaurantSlice.actions.getRestaurant(response.data.Data));
};

export default restaurantSlice.reducer;
