import { BaseState } from "../../redux/BaseState";
import moment from "moment";

export interface Product {
  ID: number;
  Description: String;
  Price: number;
  FinishDate: String;
  RestaurantID: number;
  finishDate?: moment.Moment;
}

export interface ProductState extends BaseState {
  data?: Product;
}

export interface ProductListState extends BaseState {
  data: Product[];
}
