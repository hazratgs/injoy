import { createAction } from 'redux-act'
import { IRegisterData } from '../types/register'

export const register = createAction<IRegisterData>('REGISTER')
export const registerSuccess = createAction('REGISTER_SUCCESS')
export const registerFailed = createAction('REGISTER_FAILED')
