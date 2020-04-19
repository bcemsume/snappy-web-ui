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
  name: "campaignList",
  initialState,
  reducers: {
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
      state.loading = action.payload;
    },
    deleteCampaign(state, action: PayloadAction<ResponseModel<Campaign>>) {
      state.loading = false;
      state.isSuccess = action.payload.IsSucceeded;
      state.errors = action.payload.Message;
    },
  },
});

export const getCampaigns = (restaurantId: number): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(campaignListSlice.actions.setLoading(true));
  const response = await axios.get<ResponseModel<Campaign[]>>(
    `restaurant/${restaurantId}/campaigns`
  );
  dispatch(campaignListSlice.actions.getCampaigns(response.data ?? []));
};

export const deleteCampaign = (id: number): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(campaignListSlice.actions.setLoading(true));
  const response = await axios.delete<ResponseModel<Campaign>>(
    `campaign/${id}`
  );
  dispatch(campaignListSlice.actions.deleteCampaign(response.data ?? {}));
};
export default campaignListSlice.reducer;
