export interface IUserKeys {
  email: string;
  password: string;
  validator: { email: RegExp; password: RegExp };
}
