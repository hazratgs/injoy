import React from 'react'
import { INewsType } from '../../types/news'
import {
  Container,
  Title,
  Wrapper,
  Item,
  Name,
  RemoveButton
} from './style'

interface IProps {
  items: INewsType[],
  selectedTypes: number[]
}

const CourseFilter = (props: IProps) => {
  const items = props.items.map((item, i) => {
    const active = props.selectedTypes.includes(item.id)
    return (
      <Item key={i} active={active}>
        <Name>{item.name}</Name>
        {active && (
          <RemoveButton>
            <img src='/remove.svg' alt='remove' />
          </RemoveButton>
        )}
      </Item>
    )
  })

  return (
    <Container>
      <Title>Темы</Title>
      <Wrapper>
        {items}
      </Wrapper>
    </Container>
  )
}

export default CourseFilter
