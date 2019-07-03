import { takeLatest, put, call, select } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import axios from 'axios'
import { Action } from 'redux-act'
import { IRegisterData, ConfirmCodeType } from '../types/register'
import { FieldType, CheckFieldType } from '../types/field'
import { AuthType } from '../types/auth'
import { isValidPhoneNumber } from 'react-phone-number-input/max'
import { conformToMask } from 'react-text-mask'
import * as actions from '../actions/register'
import { authUserSuccess } from '../actions/auth'
import fieldValidation from '../utils/fieldValidation'
import { AppState } from '../types/state'

const fetchRegister = (data: IRegisterData): Promise<object> =>
  axios.post('/users/register', data)

const fetchCheckMobile = (mobile: string): Promise<object> =>
  axios.post('/users/profile/check', { mobile: mobile })

const fetchConfirmCode = (data: ConfirmCodeType): Promise<object> =>
  axios.post('/users/recover/confirm', data)

function* changeField(action: Action<FieldType<string>>) {
  try {
    const state: AppState = yield select()
    const { key, value } = action.payload
    const errors: string[] = state.register.errors.filter(((item: string) => item !== key))

    if (key === 'mobile') yield put(actions.checkMobile(value))
    if (key === 'password') yield put(actions.checkPassword(value))
    if (key === 'code') yield put(actions.checkCode(value))

    yield put(actions.errorsFields(errors))
  } catch (e) {
    console.log('ERROR changeField', e)
  }
}

function* changeCheckField(action: Action<CheckFieldType>) {
  const state: AppState = yield select()
  const { errors, checked } = fieldValidation({
    field: action.payload.field,
    type: action.payload.type,
    errors: state.register.errors,
    checked: state.register.checked
  })
  yield put(actions.errorsFields(errors))
  yield put(actions.checkedField(checked))
}

function* checkMobile(action: Action<string>) {
  try {
    const mobile = action.payload

    if (!mobile.length) throw new Error('mobile length')

    if (isValidPhoneNumber(mobile)) {
      const respone = yield call(fetchCheckMobile, mobile)

      if (!respone.data.isExist) {
        yield put(actions.changeCheckField({ field: 'mobile', type: 'checked' }))
      } else {
        yield put(actions.changeCheckField({ field: 'mobile', type: 'error' }))
      }
    } else {
      yield put(actions.changeCheckField({ field: 'mobile', type: 'error' }))
    }
  } catch (e) {
    yield put(actions.changeCheckField({ field: 'mobile', type: 'clear' }))
    console.log('ERROR checkPhone', e.message)
  }
}

function* checkPassword(action: Action<string>) {
  try {
    const regx = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g
    const password = action.payload
    if (!password.length) throw new Error('length password')

    if (regx.test(password)) {
      yield put(actions.changeCheckField({ field: 'password', type: 'checked' }))
    } else {
      yield put(actions.changeCheckField({ field: 'password', type: 'error' }))
    }
  } catch (e) {
    yield put(actions.changeCheckField({ field: 'password', type: 'clear' }))
    console.log('ERROR checkPassword', e.message)
  }
}

function* checkCode(action: Action<string>) {
  try {
    const code = action.payload
    const pattern: RegExp[] = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]

    const confirm = conformToMask(code, pattern, { guide: false })

    if (confirm.conformedValue.length >= 5) {
      // yield put(actions.changeCheckField({ field: 'code', type: 'checked' }))
    } else {
      yield put(actions.changeCheckField({ field: 'code', type: 'clear' }))
    }
  } catch (e) {
    console.log('ERROR checkCode', e.message)
  }
}

function* verificationAccount() { // action: Action<IRegisterData>
  try {
    const state: AppState = yield select()
    const errors: string[] = []
    const {
      firstName,
      lastName,
      checked
    } = state.register

    if (firstName.length < 2) errors.push('firstName')
    if (lastName.length < 2) errors.push('lastName')
    if (!checked.includes('login')) errors.push('login')
    if (!checked.includes('password')) errors.push('password')

    if (errors.length) {
      yield put(actions.errorsFields(errors))
    } else {
      yield put(push('/register/phone'))
    }
  } catch (e) {
    console.log('ERROR verificationAccount', e)
  }
}

function* register() {
  try {
    const state: AppState = yield select()
    const errors: string[] = []
    const {
      firstName,
      lastName,
      mobile,
      nickName,
      password
    } = state.register

    if (!isValidPhoneNumber(mobile)) {
      errors.push('mobile')
    }

    if (errors.length) {
      yield put(actions.errorsFields(errors))
    } else {
      const data: IRegisterData = {
        firstName,
        lastName,
        password,
        nickName,
        mobile
      }

      yield call(fetchRegister, data)
      yield put(push('/register/phone/confirm'))
      yield put(actions.registerSuccess())
    }
  } catch (e) {
    console.log('ERROR register', e)
    yield put(actions.registerFailed())
  }
}

function* confirmCode() {
  try {
    const state: AppState = yield select()
    const code = state.register.code
    const mobile = state.register.mobile

    const data: ConfirmCodeType = { mobile, code }
    const respone = yield call(fetchConfirmCode, data)
    yield put(actions.changeCheckField({ field: 'code', type: 'checked' }))

    const authData: AuthType = respone.data
    yield put(authUserSuccess(authData))
    yield put(push('/register/user-info'))
  } catch (e) {
    yield put(actions.changeCheckField({ field: 'code', type: 'error' }))
    console.log('ERROR confirmCode', e.message)
  }
}

export default function* watcher() {
  yield takeLatest(actions.register, register)
  yield takeLatest(actions.changeField, changeField)
  yield takeLatest(actions.changeCheckField, changeCheckField)
  yield takeLatest(actions.checkMobile, checkMobile)
  yield takeLatest(actions.checkPassword, checkPassword)
  yield takeLatest(actions.checkCode, checkCode)
  yield takeLatest(actions.verificationAccount, verificationAccount)
  yield takeLatest(actions.confirmCode, confirmCode)
}
