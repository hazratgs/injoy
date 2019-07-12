import React from 'react'
import { ICourse } from '../../types/courses'
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

const CourseItem = (props: ICourse) => {
  const tags = props.tags.map((item: string) => <Tag key={item}>{item}</Tag>)
  return (
    <Container>
      <Image src='/images/courses/images.svg' alt='' />
      <Wrapper>
        <Title to='/'>{props.name}</Title>
        <Description>{props.description}</Description>
        <TagsWrapper>
          {tags}
        </TagsWrapper>
        <Info>
          <Author>
            <img src='/images/courses/user.svg' alt='' />
            <span>{props.authorName}</span>
          </Author>
          <Duration>
            <img src='/images/courses/time.svg' alt='' />
            <span>{props.duration}</span>
          </Duration>
          <Rating>
            <img src='/images/courses/rating.svg' alt='' />
            <span>{props.rating}</span>
          </Rating>
        </Info>
      </Wrapper>
    </Container>
  )
}

export default CourseItem
