export interface IRegisterState {
  firstName: string,
  lastName: string,
  login: string,
  password: string,
  confirmPassword: string,
  phone: string,
  code: string,
  errors: string[],
  checked: string[],
  registerStatus: boolean
}

export interface IRegisterData {
  firstName: string,
  lastName: string,
  nickName: string,
  password: string,
  mobile: string
}

export type ConfirmCodeType = {
  mobile: string,
  code: string
}
