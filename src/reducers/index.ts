import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import courses from './courses'

export default (history: any) => combineReducers({
  router: connectRouter(history),
  courses
})
