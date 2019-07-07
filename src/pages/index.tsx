import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCountries } from '../actions/countries'
import { authUser } from '../actions/auth'
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom'
import { AppState } from '../types/state'

import Register from './register'
import Routes from './routes'

interface IPagesProps extends RouteComponentProps {
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

class Pages extends Component<IPagesProps, ISectionState> {
  constructor(props: IPagesProps) {
    super(props)
    const { getCountries, authUser } = this.props

    authUser()
    getCountries()
  }

  render() {
    const { auth } = this.props

    if (!auth) return <Register />

    return (
      <>
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/' component={Routes} />
        </Switch>
      </>
    )
  }
}

export default withRouter(enhance(Pages))
