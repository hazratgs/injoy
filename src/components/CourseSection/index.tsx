import React from 'react'
import { Container, Title, GroupTitle, GroupWrapper, Item } from './styles'

const CourseSection = () => {
  return (
    <Container>
      <Title>Введение</Title>
      <GroupTitle active={true}>Подраздел</GroupTitle>
      <GroupWrapper>
        <Item active={true}>
          <span>Вступление и знакомство с автором</span>
        </Item>
        <Item>
          <span>Кто такой человек-бренд и как им стать?</span>
        </Item>
        <Item>
          <span>Вступление и знакомство с автором</span>
        </Item>
      </GroupWrapper>
      <GroupTitle>
        Подраздел
        <img src='/images/courses/lock.svg' />
      </GroupTitle>
      <GroupWrapper>
        <Item active={true}>
          <span>Вступление и знакомство с автором</span>
        </Item>
        <Item>
          <span>Кто такой человек-бренд и как им стать?</span>
        </Item>
        <Item>
          <span>Вступление и знакомство с автором</span>
        </Item>
      </GroupWrapper>
    </Container>
  )
}

export default CourseSection
