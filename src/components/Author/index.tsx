import React from 'react'
import { Container } from './styles'

export interface IProps {
  authorName: string
  imageUrl?: string
  mobileWhite?: boolean
  big?: boolean
}

const Author = (props: IProps) => (
  <Container {...props}>
    <img src='/images/courses/user.svg' alt='' />
    <span>{props.authorName}</span>
  </Container>
)

export default Author
