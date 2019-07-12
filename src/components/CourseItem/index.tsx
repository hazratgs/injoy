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
      <Image src='/images/courses/images.svg' alt='' />
      <Wrapper>
        <Title to='/'>Новые подходы к обучению детей</Title>
        <Description>Базовое и небольшое описание про что в целом курс</Description>
        <TagsWrapper>
          <Tag>Дети</Tag>
          <Tag>Менеджмент</Tag>
        </TagsWrapper>
        <Info>
          <Author>
            <img src='/images/courses/user.svg' alt='' />
            <span>Татьяна Долгоненко</span>
          </Author>
          <Duration>
            <img src='/images/courses/time.svg' alt='' />
            <span>15 часов</span>
          </Duration>
          <Rating>
            <img src='/images/courses/rating.svg' alt='' />
            <span>4.9</span>
          </Rating>
        </Info>
      </Wrapper>
    </Container>
  )
}

export default CourseItem
