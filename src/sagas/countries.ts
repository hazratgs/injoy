import { takeLatest, put, call } from 'redux-saga/effects'
import * as actions from '../actions/countries'
import axios from 'axios'
import { IResponseCountry } from '../types/countries'

const apiKey: string = '2umYfeM9MQD3RqrE8qjOD1bCx8KIbae8'

const fetchCountries = () =>
  axios.get(`http://geohelper.info/api/v1/countries?apiKey=${apiKey}&locale[lang]=ru`)

const fetchCities = (country: string) =>
  axios.get(`http://geohelper.info/api/v1/cities?apiKey=${apiKey}&locale[lang]=ru&filter[country]=AZ`)

function* getCountries() {
  try {
    const response = yield call(fetchCountries)
    const countries: IResponseCountry[] = response.data.result
    const countriesList: string[] = countries.map((item: IResponseCountry) => item.name)

    yield put(actions.getCountriesSuccess(countriesList))
    // yield put(actions.getCities())
  } catch (e) {
    console.log('ERROR', e)
  }
}

function* getCities() {
  try {
    const response = yield call(fetchCities, 'RU')
    const cities: string[] = response.data

    console.log(cities)
    yield put(actions.getCitiesSuccess(cities))
  } catch (e) {
    console.log('ERROR', e)
  }
}

export default function* watcher() {
  yield takeLatest(actions.getCountries, getCountries)
  yield takeLatest(actions.getCities, getCities)
}
