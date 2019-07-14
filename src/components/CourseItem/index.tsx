import React from 'react'
import { ICourse } from '../../types/courses'
import Author from '../Author'
import {
  Container,
  Image,
  Wrapper,
  Title,
  Description,
  TagsWrapper,
  Tag,
  Info,
  Duration,
  Rating
} from './styles'

const CourseItem = (props: ICourse) => {
  const tags = props.tags.map((item: string) => <Tag key={item}>{item}</Tag>)
  return (
    <Container>
      <Image src='/images/courses/images.svg' alt='' />
      <Wrapper>
        <Title to={`/courses/open/${props.id}`}>{props.name}</Title>
        <Description>{props.description}</Description>
        <TagsWrapper>
          {tags}
        </TagsWrapper>
        <Info>
          <Author authorName={props.authorName} />
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
