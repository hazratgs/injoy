import { createReducer } from 'redux-act'
import * as actions from '../actions/news'
import { INewsState } from '../types/news'

const initialState: INewsState = {
  items: [
    {
      title: 'Как вывести общение с коллегами из каменного века?',
      category: 'Разработка',
      image: 'https://www.vitra.com/en-gb/_storage/asset/1563450/storage/v_smallbleed_600x/17067723.jpg',
      description: ''
    },
    {
      title: 'Как вывести общение с коллегами из каменного века?',
      category: 'Анализ данных',
      image: 'https://pics.wikifeet.com/Caitlin-OConnor-Feet-3885044.jpg',
      description: ''
    },
    {
      title: 'Как освоить стартовый набор iOS-разработчика?',
      category: 'Анализ данных',
      image: 'https://avatars.mds.yandex.net/get-media-platform/1599454/file_1558679740456/1240x1240',
      description: ''
    },
    {
      title: 'За что программисты любят программирование?',
      category: 'Разработка',
      image: 'https://adukar.by/images/photo/razrabotchik.jpg',
      description: 'Мы спросили трех ведущих специалистов Injoy School о том, что им нравится в профессии'
    },
    {
      title: 'Как вывести общение с коллегами из каменного века?',
      category: 'Разработка',
      image: 'https://www.vitra.com/en-gb/_storage/asset/1563450/storage/v_smallbleed_600x/17067723.jpg',
      description: ''
    },
    {
      title: 'Как вывести общение с коллегами из каменного века?',
      category: 'Разработка',
      image: 'https://www.vitra.com/en-gb/_storage/asset/1563450/storage/v_smallbleed_600x/17067723.jpg',
      description: ''
    },
    {
      title: 'Как вывести общение с коллегами из каменного века?',
      category: 'Разработка',
      image: 'https://www.vitra.com/en-gb/_storage/asset/1563450/storage/v_smallbleed_600x/17067723.jpg',
      description: ''
    }
  ],
  types: [
    {
      id: 1,
      name: 'Анализ данных'
    },
    {
      id: 2,
      name: 'Менеджмент'
    },
    {
      id: 3,
      name: 'Разработка'
    },
    {
      id: 4,
      name: 'Дизайн'
    },
    {
      id: 5,
      name: 'Анализ данных'
    },
    {
      id: 6,
      name: 'Менеджмент'
    },
    {
      id: 7,
      name: 'Разработка'
    },
    {
      id: 8,
      name: 'Дизайн'
    }
  ],
  selectedTypes: [4]
}

const reducer = createReducer<typeof initialState>({}, initialState)

reducer.on(actions.successfulLoadNews, (state, payload) => ({
  ...state,
  items: payload
}))

export default reducer
