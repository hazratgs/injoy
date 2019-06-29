import { INewsState } from './news'
import { INavigationState } from './navigations'
import { IRegisterState } from './register'

export interface AppState {
  router: any
  news: INewsState,
  navigations: INavigationState,
  register: IRegisterState
}
