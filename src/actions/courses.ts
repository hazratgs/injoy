import { createAction } from 'redux-act'
import { ICourse, IAuthors } from '../types/courses'

export const getCourses = createAction('GET_COURSES')
export const getCoursesSuccess = createAction<ICourse[]>('GET_COURSES_SUCCESS')
export const getCoursesError = createAction('GET_COURSES_ERROR')

export const getTypes = createAction('GET_TYPES')
export const getTypesSuccess = createAction<string[]>('GET_TYPES_SUCCESS')

export const getSubjects = createAction('GET_SUBJECTS')
export const getSubjectsSuccess = createAction<string[]>('GET_SUBJECTS_SUCCESS')

export const getAuthors = createAction('GET_AUTHORS')
export const getAuthorsSuccess = createAction<IAuthors[]>('GET_AUTHORS_SUCCESS')

export const getCourseData = createAction('GET_COURSE_DATA')
export const getCourseDataSuccess = createAction('GET_COURSE_DATA_SUCCESS')

export const requestCourse = createAction('REQUEST_COURSE')
export const requestCourseConfirm = createAction('REQUEST_COURSE_CONFIRM')
