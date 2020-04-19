import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, AppDispatch } from "../../redux";
import { RestaurantState, Restaurant } from "./types";
import ResponseModel from "../../shared/ResponseModel";
import axios from "axios";
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
  isSuccess: undefined,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    getRestaurant(state, action: PayloadAction<ResponseModel<Restaurant>>) {
      state.data = action.payload.Data ?? undefined;
      state.loading = false;
      state.errors = action.payload.Message;
      state.isSuccess = action.payload.IsSucceeded;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state = { ...initialState };
      state.loading = action.payload;
    },
    saveRestaurant(state, action: PayloadAction<Restaurant>) {},
  },
});

export const getRestaurant = (id: number): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(restaurantSlice.actions.setLoading(true));
  const response = await axios.get<ResponseModel<Restaurant>>(
    `restaurant/${id}`
  );

  dispatch(restaurantSlice.actions.getRestaurant(response.data));
};

export const saveRestaurant = (restaurant: Restaurant): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(restaurantSlice.actions.setLoading(true));
  const response = await axios.put<ResponseModel<Restaurant>>(
    `restaurant/${restaurant.ID}`,
    restaurant
  );

  dispatch(restaurantSlice.actions.saveRestaurant(response.data.Data));

  dispatch(restaurantSlice.actions.setLoading(false));
};

export default restaurantSlice.reducer;
