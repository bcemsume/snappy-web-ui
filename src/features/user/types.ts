import { BaseState } from "../../redux/BaseState";

export interface UserDetail {
  UserName: String;
  Name: String;
  LastName: String;
  Email: String;
  RestaurantID: number;
}

export interface UserDetailState extends BaseState {
  data?: UserDetail;
}
