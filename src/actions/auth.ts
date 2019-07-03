import { createAction } from 'redux-act'
import { AuthType } from '../types/auth'
import { FieldType, CheckFieldType } from '../types/field'

export const authUser = createAction('AUTH_USER')
export const authUserSuccess = createAction<AuthType>('AUTH_USER_SUCCESS')
export const authUserError = createAction<AuthType>('AUTH_USER_ERROR')

// export const changeField = createAction<FieldType<string>>('AUTH_USER_CHANGE_FIELD')
// export const changeFieldSuccess = createAction<string[]>('AUTH_USER_CHANGE_FIELD_SUCCESS')
// export const changeFieldError = createAction<string[]>('AUTH_USER_CHANGE_FIELD_ERROR')

export const changeField = createAction<FieldType<string>>('CHANGE_FIELD_AUTH')
export const changeCheckField = createAction<CheckFieldType>('CHANGE_CHECK_FIELD_AUTH')
export const errorsFields = createAction<string[]>('ERROR_FIELD_AUTH')
export const checkedField = createAction<string[]>('CHECKED_FIELD_AUTH')

export const checkMobile = createAction<string>('CHECK_MOBILE_AUTH')

export const loginUser = createAction('LOGIN_USER')
