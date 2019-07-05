import { takeLatest, select, put, call } from 'redux-saga/effects'
import { Action } from 'redux-act'
import * as actions from '../actions/profile'
import { logoutUser } from '../actions/auth'
import axios from 'axios'
import { IProfileData } from '../types/profile'
import { AppState } from '../types/state'
import fieldValidation from '../utils/fieldValidation'
import { FieldType, CheckFieldType } from '../types/field'
import { conformToMask } from 'react-text-mask'

const fethProfile = (): Promise<object> => axios.get('/users/profile')

const fetchCheckNickName = (login: string): Promise<object> =>
  axios.post('/users/profile/check', { nickName: login })

const fethUpdateProfile = (profile: IProfileData): Promise<object> =>
  axios.put('/users/profile', profile)

function* changeProfileField(action: Action<FieldType<string>>) {
  try {
    const state: AppState = yield select()
    const { key, value } = action.payload
    const errors: string[] = state.profile.errors.filter(((item: string) => item !== key))

    if (key === 'dateOfBirth') yield put(actions.checkBrithDay(value))
    if (key === 'nickName') yield put(actions.checkNickName(value))
  
    yield put(actions.errorsFields(errors))
  } catch (e) {
    console.log('ERROR changeProfileField', e.message)
  }
}

function* changeCheckField(action: Action<CheckFieldType>) {
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
    const pattern = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/]
    const confirm = conformToMask(action.payload, pattern, { guide: false })

    if (confirm.conformedValue.length < 10) throw new Error('brithDay lenth')
    // if (!Date.parse(confirm.conformedValue)) throw new Error('brithDay nope')

    if (Date.parse(confirm.conformedValue)) {
      yield put(actions.changeCheckField({ field: 'dateOfBirth', type: 'checked' }))
    } else {
      yield put(actions.changeCheckField({ field: 'dateOfBirth', type: 'error' }))
    }
  } catch (e) {
    yield put(actions.changeCheckField({ field: 'dateOfBirth', type: 'clear' }))
    console.log('ERROR changeProfileField', e.message)
  }
}

function* checkNickName(action: Action<string>) {
  try {
    const nickName = action.payload

    if (nickName.length < 4 || nickName.length > 32) throw new Error('nickName length')

    const respone = yield call(fetchCheckNickName, nickName)

    if (!respone.data.isExist) {
      yield put(actions.changeCheckField({ field: 'nickName', type: 'checked' }))
    } else {
      yield put(actions.changeCheckField({ field: 'nickName', type: 'error' }))
    }

  } catch (e) {
    yield put(actions.changeCheckField({ field: 'nickName', type: 'clear' }))
    console.log('ERROR checkLogin', e.message)
  }
}

function* getProfile() {
  try {
    const response = yield call(fethProfile)
    const data = response.data

    const profile: IProfileData = {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      middleName: data.middleName ? data.middleName : '',
      nickName: data.nickName ? data.nickName : '',
      mobile: data.mobile,
      country: data.country ? data.country : '',
      city: data.city ? data.city : '',
      dateOfBirth: data.dateOfBirth ? data.dateOfBirth : '',
      roles: data.roles
    }

    yield put(actions.getProfileSuccess(profile))
  } catch (e) {
    if (e.response && e.response.status === 401) {
      yield put(logoutUser())
      console.log('LOGOUT')
    }
  }
}

function* updateProfile() {
  try {
    const state: AppState = yield select()
    const profile: IProfileData = state.profile.data

    yield call(fethUpdateProfile, profile)

    yield put(actions.updateProfileSuccess())
  } catch (e) {
    yield put(actions.updateProfileError())
    console.log('ERROR updateProfile', e.message)
  }
}

export default function* watcher() {
  yield takeLatest(actions.getProfile, getProfile)
  yield takeLatest(actions.changeProfileField, changeProfileField)
  yield takeLatest(actions.changeCheckField, changeCheckField)
  yield takeLatest(actions.checkBrithDay, checkBrithDay)
  yield takeLatest(actions.checkNickName, checkNickName)
  yield takeLatest(actions.updateProfile, updateProfile)
}
