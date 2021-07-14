import { IUserKeys } from './IUserKeys';
import { ERegExp } from './ERegExp';

export class CreateNewUser implements IUserKeys {
  email: string;
  password: string;
  validator: { email: RegExp; password: RegExp };
  errorMessage: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
    this.errorMessage = '';
    this.validator = { email: ERegExp.basic, password: ERegExp.basic };
    this.init();
  }

  init(): void {
    this.validator.email = ERegExp.email;
    this.email.length < 6 && this.emailValidator();
    this.password.length < 8 && this.passwordValidator();
  }

  emailValidator(): void {
    if (!this.validator.email.exec(this.email))
      throw new Error('your email cannot be empty or must be valid');
  }

  passwordValidator(): void {
    if (!this.validator.password.exec(this.password))
      throw new Error('your password cannot be empty or must be valid');
  }

  submit(): void {
    console.log(this);
  }
}
