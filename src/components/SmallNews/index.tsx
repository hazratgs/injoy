import React from 'react'
import { INewsItem } from '../../types/news'
import {
  Container,
  Image,
  Content,
  Category,
  Title
} from './styles'

const SmallNews = (props: INewsItem) => (
  <Container to={props.url}>
    <Image src={props.image} />
    <Content>
      <Category>{props.category}</Category>
      <Title>{props.title}</Title>
    </Content>
  </Container>
)

export default SmallNews
