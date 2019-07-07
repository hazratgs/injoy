import React from 'react'
import {
  Container,
  Image,
  Wrapper,
  Title,
  Description,
  TagsWrapper,
  Tag,
  Info,
  Author,
  Duration,
  Rating
} from './styles'

const CourseItem = () => {
  return (
    <Container>
      <Image />
      <Wrapper>
        <Title to='/'>Новые подходы к обучению детей</Title>
        <Description>Базовое и небольшое описание про что в целом курс</Description>
        <TagsWrapper>
          <Tag>Дети</Tag>
          <Tag>Менеджмент</Tag>
        </TagsWrapper>
        <Info>
          <Author>
            <img src='' alt='' />
            <span>Татьяна Долгоненко</span>
          </Author>
          <Duration>
            <img src='' alt='' />
            <span>15 часов</span>
          </Duration>
          <Rating>
            <img src='' alt='' />
            <span>4.9</span>
          </Rating>
        </Info>
      </Wrapper>
    </Container>
  )
}

export default CourseItem
