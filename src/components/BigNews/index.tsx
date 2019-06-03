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

const SmallNews = (props: INewsItem) => (
  <Container to='/'>
    <Content>
      <Category>{props.category}</Category>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Content>
    <Image src={props.image} />
  </Container>
)

export default SmallNews