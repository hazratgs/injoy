import { takeLatest, put, call } from 'redux-saga/effects'
import axios from 'axios'
import { Action } from 'redux-act'
import { IRegisterData } from '../types/register'
import * as actions from '../actions/register'

const fetch = (data: IRegisterData): Promise<object> =>
  axios.post('https://cors-anywhere.herokuapp.com/http://116.203.134.94/api/users/register', data)

function* register(action: Action<IRegisterData>) {
  try {
    const respone = yield call(fetch, action.payload)
    console.log(respone)

    yield put(actions.registerSuccess())
  } catch (e) {
    console.log('ERROR', e)
    yield put(actions.registerFailed())
  }
}

export default function* watcher() {
  yield takeLatest(actions.register, register)
}
