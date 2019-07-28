export interface INavigationState {
  visibility: boolean,
  routes: IRouteProps[]
}

export interface IRouteProps {
  icon: string,
  title: string,
  counter?: number,
  path: string,
  handle?: () => void
}

export interface IUserProps {
  path: string,
  img: string,
  name: string,
  phone: string,
  handle?: () => void
}

export type TabType = { name: string, to: string }
