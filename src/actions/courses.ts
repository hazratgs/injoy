import { createAction } from 'redux-act'
import { ICourseItem } from '../types/courses'

export const getCourses = createAction('GET_COURSES')
export const successfulLoadCourses = createAction<ICourseItem[]>('SUCCESSFUL_LOAD_COURSES')
