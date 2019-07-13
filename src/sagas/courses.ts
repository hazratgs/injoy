import { takeLatest, put, call } from 'redux-saga/effects'
import * as actions from '../actions/courses'
import axios from 'axios'
import { ICourse, IAuthors } from '../types/courses'

const fetchCourses = () => axios.get(`/courses`)
const fetchCoursesTypes = () => axios.get(`/courses/types`)
const fetchCoursesAuthors = () => axios.get(`/courses/authors`)

function* getCourses() {
  try {
    const response = yield call(fetchCourses)
    const courses: ICourse[] = response.data

    yield put(actions.getCoursesSuccess(courses))
  } catch (e) {
    console.log('ERROR getCourses', e)
  }
}

function* getTypes() {
  try {
    const response = yield call(fetchCoursesTypes)
    const types: string[] = response.data

    yield put(actions.getTypesSuccess(types))
  } catch (e) {
    console.log('ERROR getTypes', e)
  }
}

function* getAuthors() {
  try {
    const response = yield call(fetchCoursesAuthors)
    const authors: IAuthors[] = response.data

    yield put(actions.getAuthorsSuccess(authors))
  } catch (e) {
    console.log('ERROR authors', e)
  }
}

function* getSubjects() {
  try {
    const response = yield call(fetchCoursesAuthors)
    const subjects: string[] = response.data

    yield put(actions.getSubjectsSuccess(subjects))
  } catch (e) {
    console.log('ERROR authors', e)
  }
}

export default function* watcher() {
  yield takeLatest(actions.getCourses, getCourses)
  yield takeLatest(actions.getTypes, getTypes)
  yield takeLatest(actions.getAuthors, getAuthors)
  yield takeLatest(actions.getSubjects, getSubjects)
}
