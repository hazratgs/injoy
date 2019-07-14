import React from 'react'
import { connect } from 'react-redux'
import { Container, Title } from './styles'
import { ICourse } from '../../types/courses'
import { AppState } from '../../types/state'
import CourseItem from '../../components/CourseItem'

interface IProps {
  items: ICourse[]
}

const enhance = connect(
  (state: AppState) => ({
    items: state.courses.items
  })
)


const CourseList = (props: IProps) => {
  const items = props.items.map((item: ICourse) => <CourseItem key={item.id} {...item} />)
  return (
    <Container>
      <Title>Каталог курсов <b>32</b></Title>
      {items}
    </Container>
  )
}

export default enhance(CourseList)
