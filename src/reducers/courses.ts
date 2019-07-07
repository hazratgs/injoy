import { createReducer } from 'redux-act'
import * as actions from '../actions/courses'
import { ICoursesState, ICourse } from '../types/courses'

const initialState: ICoursesState = {
  items: []
}

const reducer = createReducer<typeof initialState>({}, initialState)

reducer.on(actions.getCoursesSuccess, (state, payload: ICourse[]) => ({
  ...state,
  items: payload
}))

export default reducer
