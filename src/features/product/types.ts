import { BaseState } from "../../redux/BaseState";

export interface Product {
  id: number;
  description: String;
  price: number;
  finishDate: String;
  restaurantId: number;
}

export interface ProductState extends BaseState {
  data?: Product;
}

export interface ProductListState extends BaseState {
  data: Product[];
}
