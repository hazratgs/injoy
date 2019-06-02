import React from 'react'
import { connect } from 'react-redux'
import CourseFilter from '../../components/CourseFilter'
import News from '../../containers/News'
import { Container, CourseWrapper } from './styles'
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
    <CourseWrapper>
      <News />
    </CourseWrapper>
    <CourseFilter items={props.types} selectedTypes={props.selectedTypes} />
  </Container>
)

export default enhance(Main)
