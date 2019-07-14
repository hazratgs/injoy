import React from 'react'
import HeaderContent from '../../components/HeaderContent'
import CourseInfo from '../../components/CourseInfo'
import CourseData from '../../components/CourseData'
import Poster from '../../components/Poster'
import { ICourseData } from '../../types/courses'
import {
  Container,
  Wrapper,
  Content
} from './styles'

const CourseOpen = () => {
  const courseData: ICourseData = {
    lessons: 30,
    videoLength: 6,
    tests: 63,
    tasks: 5
  }

  return (
    <Container>
      <Wrapper>
        <HeaderContent to='/' text='Новые подходы к обучению детей' />
        <Content>
          <CourseInfo />
          <CourseData {...courseData} />
          <Poster
            src='https://habrastorage.org/web/478/1e7/bb2/4781e7bb27a14fb1bf65ec0759266192.jpg'
            title='Вступление и знакомство с автором'
            duration='51:45'
          />
        </Content>
      </Wrapper>
    </Container>
  )
}

export default CourseOpen
