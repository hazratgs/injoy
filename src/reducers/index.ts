import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import news from './news'
import navigations from './navigations'
import register from './register'
import { AppState } from '../types/state'

export default (history: any) => combineReducers<AppState>({
  router: connectRouter(history),
  news,
  navigations,
  register
})
