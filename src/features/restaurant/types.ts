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
