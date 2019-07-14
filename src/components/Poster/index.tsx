import React from 'react'
import { Container, Play, Title, Duration } from './styles'

interface IProps {
  src: string
  title: string
  duration: string
}

const Poster = (props: IProps) => {
  return (
    <Container src={props.src} >
      <Play src='/images/courses/play.svg' alt='' />
      <Title>{props.title}</Title>
      <Duration>{props.duration}</Duration>
    </Container>
  )
}

export default Poster
