import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, AppDispatch } from "../../redux";
import { LoginState, UserLogin, Token } from "./types";
import ResponseModel from "../../shared/ResponseModel";
import axios from "axios";

const initialState: LoginState = {
  data: {
    AccessKey: "",
  },
  errors: undefined,
  loading: false,
  isSuccess: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state = { ...initialState };
      state.loading = action.payload;
    },
    login(state, action: PayloadAction<ResponseModel<Token>>) {
      debugger;
      state.isSuccess = action.payload.IsSucceeded;
      state.errors = action.payload.Message;
      state.loading = false;
      state.data = Object.assign({}, { ...action.payload.Data });
      localStorage.setItem("token", `${state.data?.AccessKey}`);
    },
  },
});

export const login = (data: UserLogin): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(loginSlice.actions.setLoading(true));
  const response = await axios.post<ResponseModel<Token>>(
    "http://localhost:4000/token/restaurant",
    data
  );
  debugger;
  dispatch(loginSlice.actions.login(response.data));
};

export default loginSlice.reducer;
