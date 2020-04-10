import { GET_RESTAURANT, RestaurantState } from "./types";

export const initialState: RestaurantState = {
  title: "test",
  address: "asdasdasd",
  email: "cem.sume@cemsume.com",
  paymentMethods: "",
  phone: "",
  workingDays: "",
  errors: undefined,
  loading: false,
};

export function getRestaurant() {
  console.log("action", initialState);
  return {
    type: GET_RESTAURANT,
    payload: initialState,
  };
}
