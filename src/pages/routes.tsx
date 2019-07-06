import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import NavigationBar from '../containers/NavigationBar'
import Header from '../containers/Header'
import HeaderMobile from '../containers/HeaderMobile'
import { Wrapper, Content } from './styles'
import { AppState } from '../types/state'
import { getCourses } from '../actions/courses'

import Main from './main'
import News from './news'
import Profile from './profile'
import Courses from './courses'

interface IProps {
  getCourses: () => void
}

const enhance = connect(
  (state: AppState) => ({}),
  { getCourses }
)


const Routes = (props: IProps) => {
  useEffect(() => {
    props.getCourses()
  }, [])

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
            <Route path='/courses' component={Courses} />
          </Switch>
        </Content>
      </Wrapper>
    </>
  )
}

export default enhance(Routes)
