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

export type FieldType = {
  key: string,
  value: string
}

export type CheckFieldType = {
  field: string,
  type: 'error' | 'checked' | 'clear'
}

export type ConfirmCodeType = {
  mobile: string,
  code: string
}
