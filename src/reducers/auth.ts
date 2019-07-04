import { createReducer } from 'redux-act'
import * as actions from '../actions/auth'
import isAuth from '../utils/isAuth'
import { IAuthState, AuthType } from '../types/auth'
import { FieldType } from '../types/field'

const initialState: IAuthState = {
  auth: isAuth(),
  id: '',
  name: '',
  token: '',
  mobile: '',
  password: '',
  errors: [],
  checked: []
}

const reducer = createReducer<typeof initialState>({}, initialState)

reducer.on(actions.authUserSuccess, (state, payload: AuthType) => ({
  ...state,
  ...payload,
  auth: true
}))

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

export default reducer
