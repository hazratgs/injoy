import React from 'react'
import { Container, Line } from './styles'

interface IProps {
  value: number
}

const CourseHeaderProgress = (props: IProps) => {
  const { value } = props
  return (
    <Container>
      <Line value={value} />
    </Container>
  )
}

export default CourseHeaderProgress
