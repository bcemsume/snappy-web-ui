import { BaseState } from "../../redux/BaseState";

export interface LoginState extends BaseState {
  data?: Token;
}

export interface Token {
  AccessKey: String;
  ID: number;
}

export interface UserLogin {
  UserName: String;
  Password: String;
}
