import React from 'react'
import {
  Container,
  Wrapper,
  Title,
  Button
} from './styles'

interface IProps {
  to: string,
  text: string
}

const HeaderContent = (props: IProps) => (
  <Container>
    <Button to={props.to}>
      <img src='/images/back.svg' alt='back news' />
    </Button>
    <Wrapper>
      <Title>{props.text}</Title>
    </Wrapper>
  </Container>
)

export default HeaderContent
