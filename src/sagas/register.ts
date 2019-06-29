import { takeLatest, put, call, select } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import axios from 'axios'
import { Action } from 'redux-act'
import { IRegisterData, FieldType, CheckFieldType, ConfirmCodeType } from '../types/register'
import { AuthType } from '../types/profile'
import { isValidPhoneNumber } from 'react-phone-number-input/max'
import { conformToMask } from 'react-text-mask'
import * as actions from '../actions/register'
import * as profileActions from '../actions/profile'
import fieldValidation from '../utils/fieldValidation'
import { AppState } from '../types/state'

const fetchRegister = (data: IRegisterData): Promise<object> =>
  axios.post('/users/register', data)

const fetchCheckLogin = (login: string): Promise<object> =>
  axios.post('/users/profile/check', { nickName: login })

const fetchCheckPhone = (mobile: string): Promise<object> =>
  axios.post('/users/profile/check', { mobile })

const fetchConfirmCode = (data: ConfirmCodeType): Promise<object> =>
  axios.post('/users/recover/confirm', data)

function* changeField(action: Action<FieldType>) {
  try {
    const state: AppState = yield select()
    const { key, value } = action.payload
    const errors: string[] = state.register.errors.filter(((item: string) => item !== key))

    if (key === 'login') yield put(actions.checkLogin(value))
    if (key === 'phone') yield put(actions.checkPhone(value))
    if (key === 'password') yield put(actions.checkPassword(value))
    if (key === 'confirmPassword') yield put(actions.checkConfirmPassword(value))
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

function* checkLogin(action: Action<string>) {
  try {
    const login = action.payload

    if (login.length < 4 || login.length > 32) throw new Error('login length')

    const respone = yield call(fetchCheckLogin, login)

    if (!respone.data.isExist) {
      yield put(actions.changeCheckField({ field: 'login', type: 'checked' }))
    } else {
      yield put(actions.changeCheckField({ field: 'login', type: 'error' }))
    }

  } catch (e) {
    yield put(actions.changeCheckField({ field: 'login', type: 'clear' }))
    console.log('ERROR checkLogin', e.message)
  }
}

function* checkPhone(action: Action<string>) {
  try {
    const phone = action.payload

    if (!phone.length) throw new Error('phone length')

    if (isValidPhoneNumber(phone)) {
      const respone = yield call(fetchCheckPhone, phone)

      if (!respone.data.isExist) {
        yield put(actions.changeCheckField({ field: 'phone', type: 'checked' }))
      } else {
        yield put(actions.changeCheckField({ field: 'phone', type: 'error' }))
      }
    } else {
      yield put(actions.changeCheckField({ field: 'phone', type: 'error' }))
    }
  } catch (e) {
    yield put(actions.changeCheckField({ field: 'phone', type: 'clear' }))
    console.log('ERROR checkPhone', e.message)
  }
}

function* checkPassword(action: Action<string>) {
  try {
    const state: AppState = yield select()
    const regx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/

    const password = action.payload
    const { confirmPassword } = state.register

    if (!password.length) throw new Error('length password')

    if (regx.test(password)) {
      yield put(actions.changeCheckField({ field: 'password', type: 'checked' }))
    } else {
      yield put(actions.changeCheckField({ field: 'password', type: 'error' }))
    }

    yield put(actions.checkConfirmPassword(confirmPassword))
  } catch (e) {
    yield put(actions.changeCheckField({ field: 'password', type: 'clear' }))
    console.log('ERROR checkPassword', e.message)
  }
}

function* checkConfirmPassword(action: Action<string>) {
  try {
    const state: AppState = yield select()
    const { password } = state.register
    const confirmPassword = action.payload

    if (!confirmPassword.length) throw new Error('length password')

    if (password === confirmPassword) {
      yield put(actions.changeCheckField({ field: 'confirmPassword', type: 'checked' }))
    } else {
      yield put(actions.changeCheckField({ field: 'confirmPassword', type: 'error' }))
    }
  } catch (e) {
    yield put(actions.changeCheckField({ field: 'confirmPassword', type: 'clear' }))
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
      password,
      confirmPassword,
      checked
    } = state.register

    if (firstName.length < 2) errors.push('firstName')
    if (lastName.length < 2) errors.push('lastName')
    if (!checked.includes('login')) errors.push('login')
    if (!checked.includes('password')) errors.push('password')
    if (confirmPassword !== password) errors.push('confirmPassword')

    if (errors.length) {
      yield put(actions.errorsFields(errors))
    } else {
      yield put(push('/register/phone'))
    }
  } catch (e) {
    console.log('ERROR verificationAccount', e)
  }
}

function* register() { // action: Action<IRegisterData>
  try {
    const state: AppState = yield select()
    const errors: string[] = []
    const {
      firstName,
      lastName,
      login,
      password,
      phone
    } = state.register

    if (!isValidPhoneNumber(phone)) {
      errors.push('phone')
    }

    if (errors.length) {
      yield put(actions.errorsFields(errors))
    } else {
      const data: IRegisterData = {
        firstName,
        lastName,
        password,
        nickName: login,
        mobile: phone
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
    const mobile = state.register.phone

    const data: ConfirmCodeType = { mobile, code }
    const respone = yield call(fetchConfirmCode, data)
    yield put(actions.changeCheckField({ field: 'code', type: 'checked' }))

    const authData: AuthType = respone.data
    yield put(profileActions.authUser(authData))

    window.localStorage.setItem('token', respone.data.token)

  } catch (e) {
    yield put(actions.changeCheckField({ field: 'code', type: 'error' }))
    console.log('ERROR confirmCode', e.message)
  }
}

export default function* watcher() {
  yield takeLatest(actions.register, register)
  yield takeLatest(actions.changeField, changeField)
  yield takeLatest(actions.changeCheckField, changeCheckField)
  yield takeLatest(actions.checkLogin, checkLogin)
  yield takeLatest(actions.checkPhone, checkPhone)
  yield takeLatest(actions.checkPassword, checkPassword)
  yield takeLatest(actions.checkConfirmPassword, checkConfirmPassword)
  yield takeLatest(actions.checkCode, checkCode)
  yield takeLatest(actions.verificationAccount, verificationAccount)
  yield takeLatest(actions.confirmCode, confirmCode)
}
