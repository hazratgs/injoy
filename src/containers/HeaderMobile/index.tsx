import React from 'react'
import Logo from '../../components/Logo'
import HeaderButton from '../../components/HeaderButton'
import { Container, Menu } from './styles'

const HeaderMobile = () => {
  const toggleMenu = () => ({ })

  return (
    <Container>
      <Logo />
      <HeaderButton icon='/images/notif-mobile.svg' title='notif' notif={true} />
      <Menu onClick={toggleMenu}>
        <img src='/images/menu.svg' alt='menu' />
      </Menu>
    </Container>
  )
}

export default HeaderMobile
