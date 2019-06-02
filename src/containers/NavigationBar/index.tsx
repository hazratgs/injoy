import React from 'react'
import Logo from '../../components/Logo'
import NavigationItem from '../../components/NavitgationItem'
import NavigationUser from '../../components/NavigationUser'
import { Container, Wrapper } from './styles'
import { IRouteProps, IUserProps } from '../../types/navigations'

const routes: IRouteProps[] = [
  {
    icon: '/folder.svg',
    title: 'Каталог курсов',
    counter: 32,
    path: '/courses'
  },
  {
    icon: '/books.svg',
    title: 'Мои курсы и проекты',
    counter: 5,
    path: '/my-courses'
  }
]

const user: IUserProps = {
  path: '/profile',
  img: '/users/user.png',
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
      <Wrapper>
        {items}
      </Wrapper>
      <NavigationUser {...user} />
    </Container>
  )
}

export default NavigationBar
