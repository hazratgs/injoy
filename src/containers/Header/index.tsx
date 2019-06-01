import React from 'react'
import { Container, Wrapper, Content, Buttons } from './styles'
import Logo from '../../components/Logo'
import HeaderSearch from '../../components/HeaderSearch'
import HeaderButton from '../../components/HeaderButton'

const Header: React.FC = () => (
  <Container>
    <Wrapper>
      <Logo />
      <Content>
        <HeaderSearch />
        <Buttons>
          <HeaderButton icon='/doc.svg' title='' />
          <HeaderButton icon='/notif.svg' title='' notif={true} />
          <HeaderButton icon='/support.svg' title='' border={true} />
        </Buttons>
      </Content>
    </Wrapper>
  </Container>
)

export default Header
