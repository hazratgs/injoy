import { createReducer } from 'redux-act'
import * as actions from '../actions/courses'
import { ICoursesState } from '../types/courses'

const initialState: ICoursesState = {
  items: [],
  types: [
    {
      id: 1,
      name: 'Анализ данных'
    },
    {
      id: 2,
      name: 'Менеджмент'
    },
    {
      id: 3,
      name: 'Разработка'
    },
    {
      id: 4,
      name: 'Дизайн'
    },
    {
      id: 5,
      name: 'Анализ данных'
    },
    {
      id: 6,
      name: 'Менеджмент'
    },
    {
      id: 7,
      name: 'Разработка'
    },
    {
      id: 8,
      name: 'Дизайн'
    }
  ],
  selectedTypes: [4]
}

const reducer = createReducer<typeof initialState>({}, initialState)

reducer.on(actions.successfulLoadCourses, (state, payload) => ({
  ...state,
  items: payload
}))

export default reducer
