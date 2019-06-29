import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCountries } from '../actions/countries'
import { Switch, Route } from 'react-router-dom'
import NavigationBar from '../containers/NavigationBar'
import Header from '../containers/Header'
import HeaderMobile from '../containers/HeaderMobile'
import { Wrapper, Content } from './styles'

import Main from './main'
import News from './news'
import Register from './register'
import Profile from './profile'

interface ISectionProps {
  getCountries: () => void
}

const enhance = connect(null, { getCountries })

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
const Sections = (props: ISectionProps) => {
  const { getCountries } = props

  useEffect(() => {
    getCountries()
  }, [])

  return (
    <Switch>
      <Route path='/register' component={Register} />
      <Route path='/' component={Pages} />
    </Switch>
  )
}

export default enhance(Sections)
