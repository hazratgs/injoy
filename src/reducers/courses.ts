import { createReducer } from 'redux-act'
import * as actions from '../actions/countries'
import { ICoursesState } from '../types/courses'

const initialState: ICoursesState = {
  items: []
}

const reducer = createReducer<typeof initialState>({}, initialState)

reducer.on(actions.getCitiesSuccess, (state, payload) => ({
  ...state,
  items: payload
}))

export default reducer
