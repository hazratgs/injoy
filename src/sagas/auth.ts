import { takeLatest, select, put, call } from 'redux-saga/effects'
import { Action } from 'redux-act'
import * as actions from '../actions/auth'
import { getProfile } from '../actions/profile'
import axios from 'axios'
import isAuth from '../utils/isAuth'
import { AuthType, LoginType } from '../types/auth'
import { AppState } from '../types/state'
import { CheckFieldType, FieldType } from '../types/field'
import fieldValidation from '../utils/fieldValidation'
import { isValidPhoneNumber } from 'react-phone-number-input/max'

const fetchLogin = (data: LoginType): Promise<object> => axios.post('/users/login', data)

function* changeField(action: Action<FieldType<string>>) {
  try {
    const state: AppState = yield select()
    const { key, value } = action.payload
    const errors: string[] = state.auth.errors.filter(((item: string) => item !== key))

    if (key === 'mobile') yield put(actions.checkMobile(value))

    yield put(actions.errorsFields(errors))
  } catch (e) {
    console.log('ERROR changeField', e)
  }
}

function* checkMobile(action: Action<string>) {
  try {
    const mobile = action.payload
    if (!mobile.length) throw new Error('mobile length')

    if (isValidPhoneNumber(mobile)) {
      yield put(actions.changeCheckField({ field: 'mobile', type: 'checked' }))
    } else {
      yield put(actions.changeCheckField({ field: 'mobile', type: 'error' }))
    }
  } catch (e) {
    yield put(actions.changeCheckField({ field: 'mobile', type: 'clear' }))
    console.log('ERROR checkMobile', e.message)
  }
}

function* authUser() {
  try {
    if (isAuth()) {
      yield put(getProfile())
    } else {
      // yield put(push('/register'))
    }
  } catch (e) {
    console.log('ERROR authUserSuccess', e)
  }
}

function* authUserSuccess(action: Action<AuthType>) {
  try {
    const data: AuthType = action.payload

    window.localStorage.setItem('token', data.token)
    axios.defaults.headers = {
      'Authorization': `bearer ${data.token}`
    }

    yield put(getProfile())
  } catch (e) {
    console.log('ERROR authUserSuccess', e)
  }
}

function* loginUser() {
  try {
    const state: AppState = yield select()
    const data: LoginType = {
      login: state.auth.mobile,
      password: state.auth.password
    }

    const response = yield call(fetchLogin, data)
    console.log(response)
  } catch (e) {
    yield put(actions.changeCheckField({ field: 'password', type: 'error' }))
    console.log('ERROR loginUser', e.message)
  }
}

function* changeCheckField(action: Action<CheckFieldType>) {
  const state: AppState = yield select()
  const { errors, checked } = fieldValidation({
    field: action.payload.field,
    type: action.payload.type,
    errors: state.auth.errors,
    checked: state.auth.checked
  })
  yield put(actions.errorsFields(errors))
  yield put(actions.checkedField(checked))
}

export default function* watcher() {
  yield takeLatest(actions.authUser, authUser)
  yield takeLatest(actions.authUserSuccess, authUserSuccess)
  yield takeLatest(actions.loginUser, loginUser)

  yield takeLatest(actions.changeField, changeField)
  yield takeLatest(actions.changeCheckField, changeCheckField)
  yield takeLatest(actions.checkMobile, checkMobile)
}
