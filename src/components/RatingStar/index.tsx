import React from 'react'
import { Container, Item } from './styles'

interface IProps {
  rating: string
}

const RatingStar = (props: IProps) => {
  const stars = [1, 2, 3, 4, 5].map((item: number) =>
    <Item
      src='/images/courses/star.svg'
      active={item <= +props.rating}
    />
  )
  return (
    <Container>
      {stars}
    </Container>
  )
}

export default RatingStar
