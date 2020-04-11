export default interface ResponseModel<T> {
  Message: String;
  IsSucceeded: boolean;
  Data: T;
}
