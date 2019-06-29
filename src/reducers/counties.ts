import { createReducer } from 'redux-act'
import * as actions from '../actions/countries'
import { ICountriesState } from '../types/countries'

const initialState: ICountriesState = {
  countries: [],
  cities: [
    'Москва',
    'Санкт-Петербург'
  ]
}

const reducer = createReducer<typeof initialState>({}, initialState)

reducer.on(actions.getCountriesSuccess, (state, payload) => ({
  ...state,
  countries: payload
}))

reducer.on(actions.getCitiesSuccess, (state, payload) => ({
  ...state,
  cities: payload
}))

export default reducer
