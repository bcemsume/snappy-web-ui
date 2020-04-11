import { BaseState } from "../../redux/BaseState";

export interface RestaurantState extends BaseState {
  title: String;
  address: String;
  email: String;
  phone: String;
  paymentMethods: String;
  workingDays: String;
}

export const UPDATE_RESTAURANT = "@@restaurant/UPDATE";
export const GET_RESTAURANT = "@@restaurant/GET";
export const DELETE_RESTAURANT = "@@restaurant/DELETE";
export const ADD_RESTAURANT = "@@restaurant/ADD";
export const LOADING_RESTAURANT = "@@restaurant/LOADING";

interface UpdateRestaurantAction {
  type: typeof UPDATE_RESTAURANT;
  payload: RestaurantState;
}

interface GetRestaurantAction {
  type: typeof GET_RESTAURANT;
  payload: RestaurantState;
}
interface AddRestaurantAction {
  type: typeof ADD_RESTAURANT;
  payload: RestaurantState;
}
interface DeleteRestaurantAction {
  type: typeof DELETE_RESTAURANT;
  payload: RestaurantState;
}

interface LoadingRestaurantAction {
  type: typeof LOADING_RESTAURANT;
  payload: RestaurantState;
}

export type RestaurantActionTypes =
  | UpdateRestaurantAction
  | GetRestaurantAction
  | AddRestaurantAction
  | DeleteRestaurantAction
  | LoadingRestaurantAction;
