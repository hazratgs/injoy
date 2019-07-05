import { createReducer } from 'redux-act'
import * as actions from '../actions/profile'
import { IProfileState, IProfileData } from '../types/profile'
import { FieldType } from '../types/field'

const user: IProfileData = {
  id: '',
  firstName: '',
  lastName: '',
  middleName: '',
  nickName: '',
  mobile: '',
  country: 'Россия',
  city: 'Москва',
  dateOfBirth: '',
  roles: [],
  avatar: '/images/profile/user.png'
}

const initialState: IProfileState = {
  data: user,
  checked: [],
  errors: [],
  roles: [
    { key: 'Преподователь', label: 'Teacher' },
    { key: 'Школьник', label: 'SchoolBoy' },
    { key: 'Студент', label: 'Student' },
    { key: 'Родитель школьника', label: 'Parent' },
    { key: 'Автор курсов', label: 'CourseAuthor' },
    { key: 'Представитель образовательного учреждения', label: 'TeachingStaff' },
    { key: 'Инвестор', label: 'Investor' },
    { key: 'Другое', label: 'Other' }
  ],
  educations: [
    {
      id: 1,
      title: 'Новые подходы к обучению детей',
      date: '12.05.2019'
    },
    {
      id: 2,
      title: 'Онлайн-интенсивы для Product и Project-менеджеров',
      date: '07.03.2018'
    },
    {
      id: 3,
      title: 'Управление финансами',
      date: '07.03.2018'
    },
    {
      id: 4,
      title: 'Онлайн-интенсивы для Product и Project-менеджеров',
      date: '07.03.2018'
    }
  ],
  projects: [
    {
      id: 1,
      title: 'Новые подходы к обучению детей'
    },
    {
      id: 2,
      title: 'Онлайн-интенсивы для Product и Project-менеджеров'
    },
    {
      id: 3,
      title: 'Управление финансами'
    },
    {
      id: 4,
      title: 'Управление финансами'
    }
  ]
}

const reducer = createReducer<typeof initialState>({}, initialState)

reducer.on(actions.getProfileSuccess, (state, payload: IProfileData) => ({
  ...state,
  data: {
    ...state.data,
    ...payload
  }
}))

reducer.on(actions.checkedField, (state, payload) => ({
  ...state,
  checked: payload
}))

reducer.on(actions.errorsFields, (state, payload: string[]) => ({
  ...state,
  errors: payload
}))

reducer.on(actions.changeProfileField, (state, payload: FieldType<string | string[]>) => ({
  ...state,
  data: {
    ...state.data,
    [payload.key]: payload.value
  }
}))

reducer.on(actions.clearProfile, (state) => ({
  ...state,
  date: user
}))

export default reducer
