import { createAction } from 'redux-act'
import { INewsItem } from '../types/news'

export const getNews = createAction('GET_NEWS')
export const successfulLoadNews = createAction<INewsItem[]>('SUCCESSFUL_LOAD_NEWS')
