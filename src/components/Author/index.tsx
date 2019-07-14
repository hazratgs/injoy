import React from 'react'
import { Container } from './styles'

interface IProps {
  authorName: string
  imageUrl?: string
}

const Author = (props: IProps) => (
  <Container>
    <img src='/images/courses/user.svg' alt='' />
    <span>{props.authorName}</span>
  </Container>
)

export default Author
