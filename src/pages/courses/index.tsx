import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppState } from '../../types/state'

import Courses from '../../containers/Courses'
import CourseOpen from '../../containers/CourseOpen'

const enhance = connect(
  (state: AppState) => ({})
)

interface IProps {

}

const CoursesPage = (props: IProps) => (
  <Switch>
    <Route path='/courses' exact component={Courses} />
    <Route path='/courses/open/:id' exact component={CourseOpen} />
  </Switch>
)

export default enhance(CoursesPage)
