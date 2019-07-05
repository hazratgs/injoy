import { LabelItem } from './inputs'

export interface IProfileState {
  data: IProfileData,
  checked: string[],
  errors: string[],
  roles: LabelItem[],
  educations: IProfileList[],
  projects: IProfileList[]
}

export interface IProfileList {
  id: number,
  title: string,
  date?: string
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
