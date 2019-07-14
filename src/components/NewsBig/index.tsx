import React from 'react'
import { INewsItem } from '../../types/news'
import {
  Container,
  Image,
  Content,
  Category,
  Title,
  Description
} from './styles'

const BigNews = (props: INewsItem) => (
  <Container to={props.url}>
    <Content>
      <Category>{props.category}</Category>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Content>
    <Image src={props.image} />
  </Container>
)

export default BigNews
