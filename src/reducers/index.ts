import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import news from './news'
import navigations from './navigations'
import register from './register'
import profile from './profile'
import countries from './counties'
import auth from './auth'
import courses from './courses'
import { AppState } from '../types/state'

export default (history: any) => combineReducers<AppState>({
  router: connectRouter(history),
  news,
  navigations,
  register,
  profile,
  countries,
  auth,
  courses
})
