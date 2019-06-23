import { all, fork } from 'redux-saga/effects'
import news from './news'
import register from './register'

export default function* rootSaga() {
  return yield all([
    news,
    register
  ].map(fork))
}
