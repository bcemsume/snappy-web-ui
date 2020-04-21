import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, AppDispatch } from "../../../redux";
import ResponseModel from "../../../shared/ResponseModel";
import axios from "axios";
import { ImageState, Image, ImageModel } from "../types";
const initialState: ImageState = {
  data: {
    RestaurantID: 0,
    Images: [],
  },
  errors: undefined,
  loading: false,
  isSuccess: undefined,
};

const restaurantImageSlice = createSlice({
  name: "restaurantImages",
  initialState,
  reducers: {
    getImages(state, action: PayloadAction<ResponseModel<ImageModel>>) {
      state.data = action.payload.Data ?? undefined;
      state.loading = false;
      state.errors = action.payload.Message;
      state.isSuccess = action.payload.IsSucceeded;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    saveImages(state, action: PayloadAction<Image>) {},
  },
});

export const getImages = (id: number): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(restaurantImageSlice.actions.setLoading(true));
  const response = await axios.get<ResponseModel<ImageModel>>(
    `restaurant/${id}/images`
  );

  dispatch(restaurantImageSlice.actions.getImages(response.data));
};

export const saveImages = (images: ImageModel): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(restaurantImageSlice.actions.setLoading(true));
  const response = await axios.post<ResponseModel<Image>>(
    `restaurant/image`,
    images
  );

  dispatch(restaurantImageSlice.actions.saveImages(response.data.Data));

  dispatch(restaurantImageSlice.actions.setLoading(false));
};

export default restaurantImageSlice.reducer;
