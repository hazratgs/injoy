import { createAction } from 'redux-act'

export const getCourses = createAction('GET_COURSES')
export const getCoursesSuccess = createAction('GET_COURSES_SUCCESS')
export const getCoursesError = createAction('GET_COURSES_ERROR')

export const getTypes = createAction('GET_TYPES')
export const getSubjects = createAction('GET_SUBJECTS')
export const getAuthors = createAction('GET_AUTHORS')
export const getCourseData = createAction('GET_COURSE_DATA')

export const requestCourse = createAction('REQUEST_COURSE')
export const requestCourseConfirm = createAction('REQUEST_COURSE_CONFIRM')
