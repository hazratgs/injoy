import { createReducer } from 'redux-act'
import * as actions from '../actions/navigations'
import { INavigationState } from '../types/navigations'

const initialState: INavigationState = {
  visibility: false
}

const reducer = createReducer<typeof initialState>({}, initialState)

reducer.on(actions.changeVisibilityNavBar, (state) => ({
  ...state,
  visibility: !state.visibility
}))

export default reducer
