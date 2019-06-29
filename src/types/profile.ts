export interface AuthType {
  id: string,
  name: string,
  token: string | null
}

export interface IProfileState extends AuthType {

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
