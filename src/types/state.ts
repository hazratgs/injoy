import { INewsState } from '../types/news'
import { INavigationState } from '../types/navigations'

export interface AppState {
  router: any
  news: INewsState,
  navigations: INavigationState
}
