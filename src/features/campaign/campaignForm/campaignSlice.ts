import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, AppDispatch } from "../../../redux";
import { Campaign, CampaignState } from "../types";
import axios from "axios";
import ResponseModel from "../../../shared/ResponseModel";
import moment from "moment";
import { getCampaigns } from "../campaignList/campaignListSlice";

const initialState: CampaignState = {
  data: {
    ID: 0,
    ProductID: 0,
    Claim: 0,
    FinishDate: "",
  },
  errors: undefined,
  loading: false,
  isSuccess: undefined,
};
const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    getCampaign(state, action: PayloadAction<ResponseModel<Campaign>>) {
      action.payload.Data.finishDate = moment(
        action.payload.Data.FinishDate as any
      );
      state.data = action.payload.Data ?? undefined;
      state.loading = false;
      state.errors = action.payload.Message;
      state.isSuccess = action.payload.IsSucceeded;
    },
    addCampaign(state, action: PayloadAction<ResponseModel<Campaign>>) {
      state.data = action.payload.Data ?? undefined;
      state.loading = false;
      state.errors = action.payload.Message;
      state.isSuccess = action.payload.IsSucceeded;
    },
    updateCampaign(state, action: PayloadAction<Campaign>) {},
    deleteCampaign(state, action: PayloadAction<Campaign>) {},
    resetState(state) {
      state.data = undefined;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state = { ...initialState };
      state.loading = action.payload;
    },
  },
});

export const getCampaign = (id: number): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(campaignSlice.actions.setLoading(true));
  let data = await axios.get<ResponseModel<Campaign>>(
    `http://localhost:4000/api/campaign/${id}`
  );
  dispatch(campaignSlice.actions.getCampaign(data.data));
};

export const resetState = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(campaignSlice.actions.resetState());
};

export const addCampaign = (campaign: Campaign): AppThunk => async (
  dispatch: AppDispatch
) => {
  const response = await axios.post<ResponseModel<Campaign>>(
    "http://localhost:4000/api/campaign",
    campaign
  );
  dispatch(campaignSlice.actions.addCampaign(response.data));
  dispatch(getCampaigns(1));
};

export default campaignSlice.reducer;
