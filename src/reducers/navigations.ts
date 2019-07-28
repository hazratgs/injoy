import { createReducer } from 'redux-act'
import * as actions from '../actions/navigations'
import { INavigationState } from '../types/navigations'

const initialState: INavigationState = {
  visibility: false,
  routes: [
    {
      icon: '/images/folder.svg',
      title: 'Каталог курсов',
      counter: 32,
      path: '/courses'
    },
    {
      icon: '/images/books.svg',
      title: 'Мои курсы и проекты',
      counter: 5,
      path: '/courses/personal'
    },
    {
      icon: '/images/news.svg',
      title: 'Новости',
      path: '/'
    },
    {
      icon: '/images/notif.svg',
      title: 'Уведомления',
      counter: 8,
      path: '/notif'
    },
    {
      icon: '/images/support.svg',
      title: 'FAQ',
      path: '/support'
    }
  ]
}

const reducer = createReducer<typeof initialState>({}, initialState)

reducer.on(actions.changeVisibilityNavBar, (state) => ({
  ...state,
  visibility: !state.visibility
}))

export default reducer
