import { BaseState } from "../../redux/BaseState";

export interface RestaurantState extends BaseState {
  title: String;
  address: String;
  email: String;
  phone: String;
  paymentMethods: String;
  workingDays: String;
}
