import React from 'react'
import { Container } from './styles'

interface IProps {
  text: string
}

const CourseDescription = (props: IProps) => (
  <Container>
    <p dangerouslySetInnerHTML={{ __html: props.text }} />
  </Container>
)

export default CourseDescription
