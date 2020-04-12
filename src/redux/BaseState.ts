export interface BaseState {
  readonly errors: String | undefined;
  readonly loading: boolean;
  readonly isSuccess: boolean | undefined;
}
