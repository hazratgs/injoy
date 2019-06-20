import React from 'react'
import Logo from '../../components/Logo'
import NavigationItem from '../../components/NavitgationItem'
import NavigationUser from '../../components/NavigationUser'
import HeaderSearch from '../../components/HeaderSearch'
import { Container, Wrapper } from './styles'
import { IRouteProps, IUserProps } from '../../types/navigations'

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

const NavigationBar: React.FC = () => {
  const items = routes.map(item => (
    <NavigationItem key={item.path} {...item} />
  ))

  return (
    <Container>
      <Logo />
      <HeaderSearch />
      <NavigationUser {...user} />
      <Wrapper>
        {items}
      </Wrapper>
    </Container>
  )
}

export default NavigationBar
