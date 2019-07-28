import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import NewsFilter from '../../components/NewsFilter'
import CourseList from '../../containers/CourseList'
import { Container, Wrapper, Aside, Title } from './styles'
import { INewsType } from '../../types/news'
import { AppState } from '../../types/state'
import Tabs from '../../components/Tabs'
import { TabType } from '../../types/navigations'

const enhance = connect(
  (state: AppState) => ({
    types: state.news.types,
    selectedTypes: state.news.selectedTypes
  })
)

interface IProps {
  types: INewsType[],
  selectedTypes: number[],
  personal: boolean
}

const Courses = (props: IProps) => {
  const { personal } = props

  const tabs: TabType[] = [
    { name: 'Я участник', to: '/courses/personal' },
    { name: 'Я организатор', to: '/courses/personal/organizer' }
  ]

  return (
    <Container>
      <Wrapper>
        <Switch>
          <Route path='/courses' exact>
            <Title>Каталог курсов <b>32</b></Title>
          </Route>
          <Route path='/courses/personal' exact>
            <Title>Мои курсы и проекты</Title>
          </Route>
          <Route path='/courses/personal/organizer' exact>
            <Title>Мои курсы и проекты</Title>
          </Route>
        </Switch>
        {personal && <Tabs items={tabs} />}
        <CourseList />
      </Wrapper>
      <Aside>
        <NewsFilter items={props.types} selectedTypes={props.selectedTypes} />
      </Aside>
    </Container>
  )
}

Courses.defaultProps = {
  personal: false
}

export default enhance(Courses)
