import { BaseState } from "../../redux/BaseState";

export interface RestaurantState extends BaseState {
  data?: Restaurant;
}

export interface Restaurant {
  ID: number;
  Title: String;
  Address: String;
  Email: String;
  Phone: String;
  PaymentMethods: String;
  WorkingDays: String;
}
