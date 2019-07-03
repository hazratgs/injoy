import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCountries } from '../actions/countries'
import { authUser } from '../actions/auth'
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom'
import NavigationBar from '../containers/NavigationBar'
import Header from '../containers/Header'
import HeaderMobile from '../containers/HeaderMobile'
import { AppState } from '../types/state'
import { Wrapper, Content } from './styles'

import Main from './main'
import News from './news'
import Register from './register'
import Profile from './profile'

interface ISectionProps extends RouteComponentProps {
  auth: boolean,
  getCountries: () => void,
  authUser: () => void
}

interface ISectionState {

}

const enhance = connect(
  (state: AppState) => ({
    auth: state.auth.auth
  }),
  { getCountries, authUser }
)

const Pages = () => {
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

class Sections extends Component<ISectionProps, ISectionState> {
  constructor(props: ISectionProps) {
    super(props)
    const { getCountries, authUser } = this.props

    authUser()
    getCountries()
  }

  render() {
    const { auth } = this.props

    if (!auth) return <Register />

    return (
      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/' component={Pages} />
      </Switch>
    )
  }
}

export default withRouter(enhance(Sections))
