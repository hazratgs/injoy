import { FieldType } from './field'

export interface IRegisterState {
  firstName: string,
  lastName: string,
  nickName: string,
  mobile: string,
  password: string,
  code: string,
  errors: string[],
  checked: string[],
  registerStatus: boolean,
  newUser: boolean
}

export interface IRegisterData {
  mobile: string,
  password: string
}

export type ConfirmCodeType = {
  mobile: string,
  code: string
}

export interface IFormType {
  title: string,
  header: {
    text: string,
    link: string,
    to: string
  },
  button: string
}

export interface IFormTypeProps extends IFormType {
  mobile: string,
  password: string,
  errors: string[],
  checked: string[],
  changeField: (field: FieldType<string>) => void,
  submit: () => void,
  recovery?: boolean
}
