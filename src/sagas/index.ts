import { all, fork } from 'redux-saga/effects'
import courses from './courses'

export default function* rootSaga() {
  return yield all([
    courses
  ].map(fork))
}
