import { createReducer } from 'redux-act'
import * as actions from '../actions/courses'
import { ICoursesState, ICourse, IAuthors } from '../types/courses'

const initialState: ICoursesState = {
  items: [],
  types: [],
  authors: [],
  subjects: []
}

const reducer = createReducer<typeof initialState>({}, initialState)

reducer.on(actions.getCoursesSuccess, (state, payload: ICourse[]) => ({
  ...state,
  items: payload
}))

reducer.on(actions.getTypesSuccess, (state, payload: string[]) => ({
  ...state,
  types: payload
}))

reducer.on(actions.getAuthorsSuccess, (state, payload: IAuthors[]) => ({
  ...state,
  authors: payload
}))

reducer.on(actions.getSubjectsSuccess, (state, payload: string[]) => ({
  ...state,
  subjects: payload
}))

export default reducer
