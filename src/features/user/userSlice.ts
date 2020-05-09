import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch, AppThunk } from "../../redux";
import ResponseModel from "../../shared/ResponseModel";
import { UserDetail, UserDetailState } from "./types";

const initialState: UserDetailState = {
  data: {
    Email: "",
    LastName: "",
    Name: "",
    RestaurantID: 0,
    UserName: "",
  },
  errors: undefined,
  loading: false,
  isSuccess: false,
};

const userSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state = { ...initialState };
      state.loading = action.payload;
    },
    getUser(state, action: PayloadAction<ResponseModel<UserDetail>>) {
      state.isSuccess = action.payload.IsSucceeded;
      state.errors = action.payload.Message;
      state.loading = false;
      state.data = Object.assign({}, { ...action.payload.Data });
    },
  },
});

export const getUser = (): AppThunk => async (dispatch: AppDispatch) => {
  const response = await axios.get<ResponseModel<UserDetail>>(
    "restaurant-user"
  );
  debugger;
  if (response.status != 401) {
    dispatch(userSlice.actions.getUser(response.data));
  }
};
export default userSlice.reducer;
