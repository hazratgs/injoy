import { createReducer } from 'redux-act'
import * as actions from '../actions/profile'
import { IProfileState, AuthType } from '../types/profile'

const initialState: IProfileState = {
  id: '',
  name: '',
  token: null
}

const reducer = createReducer<typeof initialState>({}, initialState)

reducer.on(actions.authUser, (state, payload: AuthType) => ({
  ...state,
  ...payload
}))

export default reducer
