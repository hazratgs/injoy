import { takeLatest, put, select } from 'redux-saga/effects'
import * as actions from '../actions/courses'

function* getCourses() {
  try {
    // Remove active options included in the tariff
    const state = yield select()
    const update = [...state.courses.items, 1]

    yield put(actions.successfulLoadCourses(update))
  } catch (e) {
    console.log('ERROR', e)
  }
}

export default function* watcher() {
  yield takeLatest(actions.getCourses, getCourses)
}
