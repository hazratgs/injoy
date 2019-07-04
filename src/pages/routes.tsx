import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import NavigationBar from '../containers/NavigationBar'
import Header from '../containers/Header'
import HeaderMobile from '../containers/HeaderMobile'
import { Wrapper, Content } from './styles'
import { AppState } from '../types/state'

import Main from './main'
import News from './news'
import Profile from './profile'

interface IPagesProps {
  auth: boolean
}

const enhance = connect(
  (state: AppState) => ({
    auth: state.auth.auth
  })
)


const Routes = (props: IPagesProps) => {
  return (
    <>
      <Header />
      <HeaderMobile />
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
}

export default enhance(Routes)
