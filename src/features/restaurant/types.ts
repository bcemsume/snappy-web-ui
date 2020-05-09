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
  Logo: String;
  Lang: String | undefined;
  Long: String | undefined;
}

export interface Image {
  ID: number;
  ImageURL: String;
  Order: number;
  Type: number;
}

export interface ImageModel {
  Images: Image[];
  RestaurantID: number;
}

export interface ImageState extends BaseState {
  data: ImageModel;
}
