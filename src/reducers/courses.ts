import { createReducer } from 'redux-act'
import * as actions from '../actions/courses'
import { ICourses } from '../types/courses'

const initialState: ICourses = {
  items: []
}

const reducer = createReducer<typeof initialState>({}, initialState)

reducer.on(actions.successfulLoadCourses, (state, payload) => ({
  ...state,
  items: payload
}))

export default reducer
