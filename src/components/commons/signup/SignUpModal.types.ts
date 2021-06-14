export interface ISignUpModalProps {
  handleNumberOpen: () => void,
  handlePositionOpen: () => void,
  signUpNumberOpen: boolean,
  signUpPositionOpen: boolean,
  handleInputData: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.ChangeEvent<HTMLInputElement>) => void;
  inputData:{
    number: string,
    position: string,
    name:string,
  }
}