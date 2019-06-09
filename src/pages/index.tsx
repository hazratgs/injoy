import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavigationBar from '../containers/NavigationBar'
import Header from '../containers/Header'
import { Wrapper, Content } from './styles'

import Main from './main'
import News from './news'
import Register from './register'
import Profile from './profile'

const Pages = () => (
  <>
    <Header />
    <Wrapper>
      <NavigationBar />
      <Content>
        <Switch>
          <Route path='/' component={Main} exact />
          <Route path='/news/:url' component={News} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Content>
    </Wrapper>
  </>
)

const Sections = () => (
  <Switch>
    <Route path='/register' component={Register} />
    <Route path='/' component={Pages} />
  </Switch>
)

export default Sections
