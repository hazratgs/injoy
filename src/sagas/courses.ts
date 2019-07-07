import { takeLatest, put, call } from 'redux-saga/effects'
import * as actions from '../actions/courses'
import axios from 'axios'
import { ICourse } from '../types/courses'

const fetchCourses = () => axios.get(`/courses`)

function* getCourses() {
  try {
    const response = yield call(fetchCourses)
    const courses = response.data

    yield put(actions.getCoursesSuccess(courses))
  } catch (e) {
    console.log('ERROR', e)
  }
}

export default function* watcher() {
  yield takeLatest(actions.getCourses, getCourses)
}
