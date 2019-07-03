export interface AuthType {
  id: string,
  name: string,
  token: string
}

export interface IAuthState extends AuthType {
  auth: boolean,
  mobile: string,
  password: string,
  errors: string[],
  checked: string[]
}

export type LoginType = {
  login: string,
  password: string
}
