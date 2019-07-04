import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCountries } from '../actions/countries'
import { authUser } from '../actions/auth'
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom'
import NewUserPopup from '../containers/NewsUserPopup'
import { AppState } from '../types/state'

import Register from './register'
import Routes from './routes'

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
      <>
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/' component={Routes} />
        </Switch>
        <NewUserPopup />
      </>
    )
  }
}

export default withRouter(enhance(Sections))
