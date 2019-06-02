import React from 'react'
import { connect } from 'react-redux'
import CourseFilter from '../../components/CourseFilter'
import { Container, CourseWrapper } from './styles'
import { ICourseType } from '../../types/courses'
import { AppState } from '../../types/state'

const enhance = connect(
  (state: AppState) => ({
    types: state.courses.types,
    selectedTypes: state.courses.selectedTypes
  })
)

interface IProps {
  types: ICourseType[],
  selectedTypes: number[]
}

const Main = (props: IProps) => (
  <Container>
    <CourseWrapper>
      Курсы
    </CourseWrapper>
    <CourseFilter items={props.types} selectedTypes={props.selectedTypes} />
  </Container>
)

export default enhance(Main)
