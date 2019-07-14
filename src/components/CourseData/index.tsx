import React from 'react'
import { ICourseData } from '../../types/courses'
import { Container, Item } from './styles'

const CourseData = (props: ICourseData) => {
  const { lessons, videoLength, tests, tasks } = props
  return (
    <Container>
      <Item>
        <img src='/images/courses/lessons.svg' alt='' />
        <span><b>{lessons}</b> уроков</span>
      </Item>
      <Item>
        <img src='/images/courses/videoLength.svg' alt='' />
        <span><b>{videoLength}</b> часов видео</span>
      </Item>
      <Item>
        <img src='/images/courses/tests.svg' alt='' />
        <span><b>{tests}</b> теста</span>
      </Item>
      <Item>
        <img src='/images/courses/tasks.svg' alt='' />
        <span><b>{tasks}</b> интерактивных задач</span>
      </Item>
    </Container>
  )
}

export default CourseData
