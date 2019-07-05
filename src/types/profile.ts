import { LabelItem } from './inputs'

export interface IProfileState {
  data: IProfileData,
  checked: string[],
  errors: string[],
  roles: LabelItem[]
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
  nickName: string,
  mobile: string,
  country: string,
  city: string,
  dateOfBirth: string,
  roles: string[],
  avatar?: string
}
