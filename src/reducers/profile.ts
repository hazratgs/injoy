import { createReducer } from 'redux-act'
import * as actions from '../actions/profile'
import { IProfileState, AuthType, IProfileData } from '../types/profile'
import { FieldType } from '../types/field'

const initialState: IProfileState = {
  id: '',
  name: '',
  token: '',
  data: {
    id: '',
    firstName: '',
    lastName: '',
    middleName: '',
    mobile: '',
    country: 'Россия',
    city: 'Москва',
    dateOfBirth: '',
    roles: []
  },
  checked: [],
  errors: [],
  types: [
    'Преподователь',
    'Школьник',
    'Студент',
    'Родитель школьника',
    'Автор курсов',
    'Представитель образовательного учреждения',
    'Инвестор',
    'Другое'
  ]
}

const reducer = createReducer<typeof initialState>({}, initialState)

reducer.on(actions.authUser, (state, payload: AuthType) => ({
  ...state,
  ...payload
}))

reducer.on(actions.getProfileSuccess, (state, payload: IProfileData) => ({
  ...state,
  ...payload
}))

reducer.on(actions.checkedField, (state, payload) => ({
  ...state,
  checked: payload
}))

reducer.on(actions.errorsFields, (state, payload: string[]) => ({
  ...state,
  errors: payload
}))

reducer.on(actions.changeProfileField, (state, payload: FieldType<string | string[]>) => ({
  ...state,
  data: {
    ...state.data,
    [payload.key]: payload.value
  }
}))

export default reducer
