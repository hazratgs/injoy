import React from 'react'
import HeaderContent from '../../components/HeaderContent'
import CourseInfo from '../../components/CourseInfo'
import CourseData from '../../components/CourseData'
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
        </Content>
      </Wrapper>
    </Container>
  )
}

export default CourseOpen
