import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RegisterStart from '../../components/RegisterStart'
import {
  Container,
  Logo,
  Footer,
  Copyright,
  SocialWrapper,
  SocialItem,
  Wrapper
} from './styles'

const Register = () => (
  <Container>
    <Wrapper>
      <Logo src='/logo.svg' alt='injoy' />
      <Switch>
        <Route path='/register' component={RegisterStart} />
      </Switch>
      <Footer>
        <Copyright>© 2019 injoy.org Все права защищены.</Copyright>
        <SocialWrapper>
          <SocialItem target='_blank' href='#'>
            <img src='/facebook.svg' alt='facebook' />
          </SocialItem>
          <SocialItem target='_blank' href='#'>
            <img src='/twitter.svg' alt='twitter' />
          </SocialItem>
          <SocialItem target='_blank' href='#'>
            <img src='/youtube.svg' alt='youtube' />
          </SocialItem>
          <SocialItem target='_blank' href='#'>
            <img src='/telegram.svg' alt='telegram' />
          </SocialItem>
        </SocialWrapper>
      </Footer>
    </Wrapper>
  </Container>
)

export default Register
