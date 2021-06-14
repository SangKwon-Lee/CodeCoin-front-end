export interface ILoginModal {
  handleSignUpOpen: () => void,
  signUpOpen: boolean,
  handleChangeLoginInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
}