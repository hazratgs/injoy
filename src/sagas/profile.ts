import { takeLatest, select } from 'redux-saga/effects'
import { Action } from 'redux-act'
import { AuthType } from '../types/profile'
import * as actions from '../actions/profile'
import { AppState } from '../types/state'

function* authUser(action: Action<AuthType>) {
  try {
    const state: AppState = yield select()
    console.log(action)
  } catch (e) {
    console.log('ERROR authUser', e)
  }
}

export default function* watcher() {
  yield takeLatest(actions.authUser, authUser)
}
