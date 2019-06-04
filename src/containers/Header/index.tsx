import React from 'react'
import { Container, Wrapper, Content, Buttons } from './styles'
import HeaderSearch from '../../components/HeaderSearch'
import HeaderButton from '../../components/HeaderButton'

const Header: React.FC = () => (
  <Container>
    <Wrapper>
      <Content>
        <HeaderSearch />
        <Buttons>
          <HeaderButton icon='/images/doc.svg' title='' />
          <HeaderButton icon='/images/notif.svg' title='' notif={true} />
          <HeaderButton icon='/images/support.svg' title='' border={true} />
        </Buttons>
      </Content>
    </Wrapper>
  </Container>
)

export default Header
