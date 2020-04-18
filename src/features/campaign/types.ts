import { BaseState } from "../../redux/BaseState";
import moment from "moment";

export interface Campaign {
  ID: number;
  Product?: Product;
  ProductID: number;
  Description: String;
  Claim: number;
  finishDate?: moment.Moment;
  FinishDate: String;
}

export interface Product {
  ID: number;
  Description: String;
}

export interface CampaignState extends BaseState {
  data?: Campaign;
}

export interface CampaignListState extends BaseState {
  data: Campaign[];
}

export interface ProductState extends BaseState {
  data?: Product;
}
