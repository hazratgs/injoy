import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RegisterStart from '../../containers/RegisterStart'
// import RegisterAccount from '../../containers/RegisterAccount'
// import RegisterPhone from '../../containers/RegisterPhone'
import RegisterConfirm from '../../containers/RegisterConfirm'
import RegisterUserInfo from '../../containers/RegisterUserInfo'
import RegisterRoles from '../../containers/RegisterRoles'
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
      <Logo src='/images/logo.svg' alt='injoy' />
      <Switch>
        <Route path='/' component={RegisterStart} exact />
        <Route path='/auth' component={RegisterStart} exact />
        {/* <Route path='/register/account' component={RegisterAccount} exact /> */}
        {/* <Route path='/register/phone' component={RegisterPhone} exact /> */}
        <Route path='/register/phone/confirm' component={RegisterConfirm} exact />
        <Route path='/register/user-info' component={RegisterUserInfo} exact />
        <Route path='/register/roles' component={RegisterRoles} exact />
      </Switch>
      <Footer>
        <Copyright>© 2019 injoy.org Все права защищены.</Copyright>
        <SocialWrapper>
          <SocialItem target='_blank' href='#'>
            <img src='/images/facebook.svg' alt='facebook' />
          </SocialItem>
          <SocialItem target='_blank' href='#'>
            <img src='/images/twitter.svg' alt='twitter' />
          </SocialItem>
          <SocialItem target='_blank' href='#'>
            <img src='/images/youtube.svg' alt='youtube' />
          </SocialItem>
          <SocialItem target='_blank' href='#'>
            <img src='/images/telegram.svg' alt='telegram' />
          </SocialItem>
        </SocialWrapper>
      </Footer>
    </Wrapper>
  </Container>
)

export default Register
