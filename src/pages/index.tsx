import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavigationBar from '../containers/NavigationBar'
import Header from '../containers/Header'
import { Wrapper, Content } from './styles'

import Main from './main'
import Register from './register'

const Pages = () => (
  <>
    <Header />
    <Wrapper>
      <NavigationBar />
      <Content>
        <Switch>
          <Route path='/' component={Main} />
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
