import React from 'react'
import { Container, Title, Progress, PercentWrappeer } from './styles'

interface IProps {
  value: number
}

const CourseProgress = (props: IProps) => {
  const { value } = props
  return (
    <Container>
      <Title>Прогресс</Title>
      <Progress value={value} />
      <PercentWrappeer>
        <span>0%</span>
        <span>100%</span>
      </PercentWrappeer>
    </Container>
  )
}

export default CourseProgress
