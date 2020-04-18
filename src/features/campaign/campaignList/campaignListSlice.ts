import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, AppDispatch } from "../../../redux";
import { CampaignListState, Campaign } from "../types";
import ResponseModel from "../../../shared/ResponseModel";
import axios from "axios";
import moment from "moment";

const initialState: CampaignListState = {
  data: [],
  errors: undefined,
  loading: false,
  isSuccess: undefined,
};

const campaignListSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    getCampaign(state, action: PayloadAction<Campaign>) {
      state.loading = false;
    },
    getCampaigns(state, action: PayloadAction<ResponseModel<Campaign[]>>) {
      action.payload?.Data.forEach(
        (x) => (x.FinishDate = moment(x.FinishDate as any).format("DD.MM.YYYY"))
      );
      state.data = action.payload.Data ?? undefined;
      state.loading = false;
      state.errors = action.payload.Message;
      state.isSuccess = action.payload.IsSucceeded;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state = { ...initialState };
      state.loading = action.payload;
    },
  },
});

export const getCampaigns = (productId: number): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(campaignListSlice.actions.setLoading(true));
  const response = await axios.get<ResponseModel<Campaign[]>>(`campaign`);
  debugger;
  dispatch(campaignListSlice.actions.getCampaigns(response.data ?? []));
  dispatch(campaignListSlice.actions.setLoading(false));
};

export default campaignListSlice.reducer;
