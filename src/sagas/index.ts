import { all, fork } from 'redux-saga/effects'
import news from './news'

export default function* rootSaga() {
  return yield all([
    news
  ].map(fork))
}
