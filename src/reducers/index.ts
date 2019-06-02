import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import news from './news'
import { AppState } from '../types/state'

export default (history: any) => combineReducers<AppState>({
  router: connectRouter(history),
  news
})
