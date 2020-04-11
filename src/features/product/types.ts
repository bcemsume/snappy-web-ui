import { BaseState } from "../../redux/BaseState";

export interface Product {
  id: number;
  description: String;
  price: String;
  finishDate: String;
}

export interface ProductState extends BaseState, Product {}

export interface ProductListState extends BaseState {
  data: Product[];
}
