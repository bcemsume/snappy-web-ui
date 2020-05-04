import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch, AppThunk } from "../../redux";
import ResponseModel from "../../shared/ResponseModel";
import { getUser } from "../user/userSlice";
import { LoginState, Token, UserLogin } from "./types";

const initialState: LoginState = {
  data: {
    ID: 0,
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
      state.isSuccess = action.payload.IsSucceeded;
      state.errors = action.payload.Message;
      state.loading = false;
      state.data = Object.assign({}, { ...action.payload.Data });
      localStorage.setItem("token", `${state.data?.AccessKey}`);
      localStorage.setItem("id", `${state.data?.ID}`);
    },
  },
});

export const login = (data: UserLogin): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(loginSlice.actions.setLoading(true));
  const response = await axios.post<ResponseModel<Token>>(
    "https://snappy-app-api.herokuapp.com/token/restaurant",
    data
  );
  dispatch(getUser());
  dispatch(loginSlice.actions.login(response.data));
};
export default loginSlice.reducer;
