import { INewsState } from './news'
import { INavigationState } from './navigations'
import { IRegisterState } from './register'
import { IProfileState } from './profile'
import { ICountriesState } from './countries'
import { IAuthState } from './auth'
import { ICoursesState } from './courses'

export interface AppState {
  router: any
  news: INewsState,
  navigations: INavigationState,
  register: IRegisterState,
  profile: IProfileState,
  countries: ICountriesState,
  auth: IAuthState,
  courses: ICoursesState
}

export default AppState
