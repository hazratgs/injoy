import { createAction } from 'redux-act'
import { AuthType } from '../types/profile'

export const authUser = createAction<AuthType>('AUTH_USER')
