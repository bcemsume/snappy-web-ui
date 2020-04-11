import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, AppDispatch } from "../../redux";
import { RestaurantState } from "./types";

const initialState: RestaurantState = {
  title: "test",
  address: "asdasdasd",
  email: "cem.sume@cemsume.com",
  paymentMethods: "",
  phone: "",
  workingDays: "",
  errors: undefined,
  loading: false,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    getRestaurant(state) {
      state.loading = false;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const getRestaurant = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(restaurantSlice.actions.setLoading(true));

  dispatch(restaurantSlice.actions.getRestaurant());
};

export default restaurantSlice.reducer;
