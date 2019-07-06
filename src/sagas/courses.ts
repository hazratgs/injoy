import { takeLatest, put, call } from 'redux-saga/effects'
import * as actions from '../actions/courses'
import axios from 'axios'
import { } from '../types/courses'

const fetchCourses = () => axios.get(`/courses`)

function* getCourses() {
  try {
    const response = yield call(fetchCourses)
    window.console.log(response)
    // yield put(actions.getCountriesSuccess(countriesList))
    // yield put(actions.getCities())
  } catch (e) {
    console.log('ERROR', e)
  }
}

export default function* watcher() {
  yield takeLatest(actions.getCourses, getCourses)
}
