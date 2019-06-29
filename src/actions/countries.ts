import { createAction } from 'redux-act'

export const getCountries = createAction('GET_COUNTRIES')
export const getCountriesSuccess = createAction<string[]>('GET_COUNTRIES_SUCCESS')
export const getCountriesError = createAction('GET_COUNTRIES_ERROR')

export const getCities = createAction('GET_CITIES')
export const getCitiesSuccess = createAction<string[]>('GET_CITIES_SUCCESS')
export const getCitiesError = createAction('GET_CITIES_ERROR')
