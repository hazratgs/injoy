import { takeLatest, select, put, call } from 'redux-saga/effects'
import { Action } from 'redux-act'
import * as actions from '../actions/profile'
import axios from 'axios'
import isDate from '../utils/isDate'
import { AuthType, IProfileData } from '../types/profile'
import { AppState } from '../types/state'
import fieldValidation from '../utils/fieldValidation'
import { FieldType, CheckFieldType } from '../types/field'
import { conformToMask } from 'react-text-mask'

const fethProfile = (): Promise<object> => axios.get('/users/profile')

function* changeProfileField(action: Action<FieldType>) {
  try {
    const state: AppState = yield select()
    const { key, value } = action.payload
    const errors: string[] = state.profile.errors.filter(((item: string) => item !== key))

    if (key === 'dateOfBirth') yield put(actions.checkBrithDay(value))

    yield put(actions.errorsFields(errors))
  } catch (e) {
    console.log('ERROR changeProfileField', e.message)
  }
}

function* changeProfileFieldSuccess(action: Action<CheckFieldType>) {
  const state: AppState = yield select()
  const { errors, checked } = fieldValidation({
    field: action.payload.field,
    type: action.payload.type,
    errors: state.profile.errors,
    checked: state.profile.checked
  })
  yield put(actions.errorsFields(errors))
  yield put(actions.checkedField(checked))
}

function* checkBrithDay(action: Action<string>) {
  try {
    const pattern = [/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]
    const confirm = conformToMask(action.payload, pattern, { guide: false })

    if (confirm.conformedValue.length < 10) throw new Error('brithDay lenth')

    if (isDate(action.payload)) {
      yield put(actions.changeProfileFieldSuccess({ field: 'dateOfBirth', type: 'checked' }))
    } else {
      yield put(actions.changeProfileFieldSuccess({ field: 'dateOfBirth', type: 'error' }))
    }
  } catch (e) {
    yield put(actions.changeProfileFieldSuccess({ field: 'dateOfBirth', type: 'clear' }))
    console.log('ERROR changeProfileField', e.message)
  }
}

function* authUser(action: Action<AuthType>) {
  try {
    const data: AuthType = action.payload

    window.localStorage.setItem('token', data.token)
    axios.defaults.headers = {
      'Authorization': `bearer ${data.token}`
    }

    yield put(actions.getProfile())
  } catch (e) {
    console.log('ERROR authUser', e)
  }
}

function* getProfile() {
  try {
    const response = yield call(fethProfile)
    const profile: IProfileData = response.data

    yield put(actions.getProfileSuccess(profile))
  } catch (e) {
    console.log('ERROR getProfile', e.message)
  }
}

export default function* watcher() {
  yield takeLatest(actions.authUser, authUser)
  yield takeLatest(actions.getProfile, getProfile)
  yield takeLatest(actions.changeProfileField, changeProfileField)
  yield takeLatest(actions.changeProfileFieldSuccess, changeProfileFieldSuccess)
  yield takeLatest(actions.checkBrithDay, checkBrithDay)
}
