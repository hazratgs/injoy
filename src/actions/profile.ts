import { createAction } from 'redux-act'
import { IProfileData } from '../types/profile'
import { FieldType, CheckFieldType } from '../types/field'

export const getProfile = createAction('GET_PROFILE')
export const getProfileSuccess = createAction<IProfileData>('GET_PROFILE_SUCCESS')
export const getProfileError = createAction('GET_PROFILE_ERROR')

export const clearProfile = createAction('EXIT_USER_PROFILE')

export const changeProfileField = createAction<FieldType<string> | FieldType<string[]>>('CHANGE_PROFILE_PROFILE')
export const changeCheckField = createAction<CheckFieldType>('CHANGE_PROFILE_PROFILE_SUCCESS')
export const errorsFields =  createAction<string[]>('ERROR_FIELD_PROFILE')
export const checkedField = createAction<string[]>('CHECKED_FIELD_PROFILE')

export const checkBrithDay = createAction<string>('CHECK_BRITH_DAY_PROFILE')
export const checkNickName = createAction<string>('CHECK_NICKNAME_PROFILE')

export const updateProfile = createAction('UPDATE_PROFILE')
export const updateProfileSuccess = createAction('UPDATE_PROFILE_SUCCESS')
export const updateProfileError = createAction('UPDATE_PROFILE_ERROR')
