import { createReducer } from 'redux-act'
import * as actions from '../actions/register'
import { IRegisterState } from '../types/register'
import { FieldType } from '../types/field'

const initialState: IRegisterState = {
  firstName: '',
  lastName: '',
  login: '',
  password: '',
  confirmPassword: '',
  phone: '',
  code: '',
  errors: [],
  checked: [],
  registerStatus: false
}

const reducer = createReducer<typeof initialState>({}, initialState)

reducer.on(actions.changeField, (state, payload: FieldType<string>) => ({
  ...state,
  [payload.key]: payload.value
}))

reducer.on(actions.checkedField, (state, payload) => ({
  ...state,
  checked: payload
}))

reducer.on(actions.errorsFields, (state, payload: string[]) => ({
  ...state,
  errors: payload
}))

reducer.on(actions.register, (state) => ({
  ...state,
  registerStatus: true
}))

reducer.on(actions.registerSuccess, (state) => ({
  ...state,
  registerStatus: false
}))

reducer.on(actions.registerFailed, (state) => ({
  ...state,
  registerStatus: false
}))

export default reducer
