import {
  RestaurantActionTypes,
  RestaurantState,
  ADD_RESTAURANT,
  DELETE_RESTAURANT,
  GET_RESTAURANT,
  UPDATE_RESTAURANT,
  LOADING_RESTAURANT,
} from "./types";
export const initialState: RestaurantState = {
  title: "",
  address: "",
  email: "",
  paymentMethods: "",
  phone: "",
  workingDays: "",
  errors: undefined,
  loading: false,
};
const reducer = (state = initialState, action: RestaurantActionTypes) => {
  switch (action.type) {
    case LOADING_RESTAURANT: {
      return { ...state, ...action.payload };
    }
    case DELETE_RESTAURANT: {
      return { ...state, ...action.payload };
    }
    case GET_RESTAURANT: {
      console.log("reducer");

      return { ...state, ...action.payload };
    }
    case UPDATE_RESTAURANT: {
      return { ...state, ...action.payload };
    }
    case ADD_RESTAURANT: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};
export { reducer as RestaurantReducer };
