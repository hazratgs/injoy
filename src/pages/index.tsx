import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import NavigationBar from '../containers/NavigationBar'
import Header from '../containers/Header'
import { Wrapper, Content } from './styles'

import Main from './main'

const Pages: React.FC = () => (
  <Fragment>
    <Header />
    <Wrapper>
      <NavigationBar />
      <Content>
        <Switch>
          <Route path='/' component={Main} />
        </Switch>
      </Content>
    </Wrapper>
  </Fragment>

)

export default Pages
