import React from 'react'
import RatingStar from '../RatingStar'
import Author from '../Author'
import BeenTrained from '../BeenTrained'
import { Container, Item, Title } from './styles'

interface IProps {

}

const CourseInfo = (props: IProps) => (
  <Container>
    <Item>
      <Title>Рейтинг курса</Title>
      <RatingStar rating='4' />
    </Item>
    <Item>
      <Title>Автор курса</Title>
      <Author authorName='Татьяна Долгоненко' />
    </Item>
    <Item>
      <Title>Прошли обучение</Title>
      <BeenTrained />
    </Item>
  </Container>
)

export default CourseInfo
