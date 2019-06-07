import React from 'react'
import { INewsItem } from '../../types/news'
import {
  Container,
  Link,
  Image,
  Content,
  Category,
  Title
} from './styles'

const OtherNewsItem = (props: INewsItem) => (
  <Container>
    <Link to={props.url}>
      <Image src={props.image} alt={props.title} />
      <Content>
        <Category>{props.category}</Category>
        <Title>{props.title}</Title>
      </Content>
    </Link>
  </Container>
)

export default OtherNewsItem
