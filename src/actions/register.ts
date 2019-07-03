import { createAction } from 'redux-act'
import { FieldType, CheckFieldType } from '../types/field'

export const register = createAction('REGISTER')
export const registerSuccess = createAction('REGISTER_SUCCESS')
export const registerFailed = createAction('REGISTER_FAILED')

export const confirmCode = createAction('CONFIRM_CODE_REGISTER')

export const verificationAccount = createAction('VERIFICATION_ACCOUNT_REGISTER')

export const changeField = createAction<FieldType<string>>('CHANGE_FIELD_REGISTER')
export const changeCheckField = createAction<CheckFieldType>('CHANGE_CHECK_FIELD_REGISTER')
export const errorsFields = createAction<string[]>('ERROR_FIELD_REGISTER')
export const checkedField = createAction<string[]>('CHECKED_FIELD_REGISTER')

export const checkMobile = createAction<string>('CHECK_MOBILE_REGISTER')
export const checkPassword = createAction<string>('CHECK_PASSWORD_REGISTER')
export const checkCode = createAction<string>('CHECK_CODE_REGISTER')
