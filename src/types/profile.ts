export interface AuthType {
  id: string,
  name: string,
  token: string
}

export interface IProfileState extends AuthType {
  data: IProfileData,
  checked: string[],
  errors: string[],
  types: string[]
}

export interface IProfileList {
  id: number,
  title: string,
  status?: boolean,
  date?: string
}

export interface IProfileEducation {
  id: number,
  title: string
}

export interface IProfileData {
  id: string,
  firstName: string,
  lastName: string,
  middleName: string,
  mobile: string,
  country: string,
  city: string,
  dateOfBirth: string,
  roles: string[]
}
