import { CreateNewUser } from '../CreateNewUser';
import { ERegExp } from '../ERegExp';
describe('How to the create a new user', () => {
  const emailInput: string = 'email@fake.fr';
  const passwordInput: string = 'password';
  const fakeUser: CreateNewUser = new CreateNewUser(emailInput, passwordInput);

  afterEach(() => {
    fakeUser.email = emailInput;
    fakeUser.password = passwordInput;
  });

  it('should have an email and a password to be created', () => {
    const fakeUserKeys: string[] = Object.keys(fakeUser);
    const expectedKeys: string[] = ['email', 'password'];

    expect(fakeUserKeys).toEqual(expect.arrayContaining(expectedKeys));
  });

  it('cannot have an empty password nor an empty email', () => {
    expect(fakeUser.email.length).toBeTruthy();
    expect(fakeUser.password.length).toBeTruthy();
  });

  describe('When it is impossible to create a new user', () => {
    it('should be an error if email or password or both are empty or doesnt match with required field', () => {
      //expect.assertions(4);

      fakeUser.email = '';
      fakeUser.password = '';

      expect(() => {
        fakeUser.emailValidator();
      }).toThrow(ERegExp.basic);

      expect(() => {
        fakeUser.passwordValidator();
      }).toThrow(ERegExp.basic);
    });
  });

  it('email must contain at least 6 characters', () => {
    expect(fakeUser.email.length).toBeGreaterThanOrEqual(6);
  });

  it('password must contain at least 8 characters', () => {
    expect(fakeUser.email.length).toBeGreaterThanOrEqual(8);
  });

  it("email must have a specific format and contain special char '@' and '.'", () => {
    expect(fakeUser.email).toContain('@' && '.');
  });
});
