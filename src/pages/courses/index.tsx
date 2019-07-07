import React from 'react'
import { connect } from 'react-redux'
import NewsFilter from '../../components/NewsFilter'
import CourseList from '../../containers/CourseList'
import { Container, Wrapper, Aside } from './styles'
import { INewsType } from '../../types/news'
import { AppState } from '../../types/state'

const enhance = connect(
  (state: AppState) => ({
    types: state.news.types,
    selectedTypes: state.news.selectedTypes
  })
)

interface IProps {
  types: INewsType[],
  selectedTypes: number[]
}

const Main = (props: IProps) => (
  <Container>
    <Wrapper>
      <CourseList />
    </Wrapper>
    <Aside>
      <NewsFilter items={props.types} selectedTypes={props.selectedTypes} />
    </Aside>
  </Container>
)

export default enhance(Main)
