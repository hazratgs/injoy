import { all, fork } from 'redux-saga/effects'
import news from './news'
import register from './register'
import profile from './profile'
import countries from './countries'

export default function* rootSaga() {
  return yield all([
    news,
    register,
    profile,
    countries
  ].map(fork))
}
