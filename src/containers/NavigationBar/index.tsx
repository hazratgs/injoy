import React from 'react'
import { connect } from 'react-redux'
import { changeVisibilityNavBar } from '../../actions/navigations'
import { AppState } from '../../types/state'
import Logo from '../../components/Logo'
import NavigationItem from '../../components/NavitgationItem'
import NavigationUser from '../../components/NavigationUser'
import HeaderSearch from '../../components/HeaderSearch'
import { Container, Wrapper } from './styles'
import { IRouteProps, IUserProps } from '../../types/navigations'

interface IProps {
  visibility: boolean,
  changeVisibilityNavBar: () => void
}

const enhance = connect(
  (state: AppState) => ({ visibility: state.navigations.visibility }),
  { changeVisibilityNavBar }
)

const routes: IRouteProps[] = [
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
    path: '/my-courses'
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

const user: IUserProps = {
  path: '/profile',
  img: '/images/users/user.png',
  name: 'Антон Куликов',
  phone: '+7 962 948 78 87'
}

const NavigationBar = (props: IProps) => {
  const { visibility } = props
  const items = routes.map(item => (
    <NavigationItem
      key={item.path}
      handle={props.changeVisibilityNavBar}
      {...item}
    />
  ))

  return (
    <Container visibility={visibility}>
      <Logo />
      <HeaderSearch />
      <NavigationUser handle={props.changeVisibilityNavBar} {...user} />
      <Wrapper>
        {items}
      </Wrapper>
    </Container>
  )
}

export default enhance(NavigationBar)
