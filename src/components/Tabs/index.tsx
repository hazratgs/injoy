import React from 'react'
import { Container, Item } from './styles'
import { TabType } from '../../types/navigations'

interface IProps {
  items: TabType[]
}

const Tabs = (props: IProps) => {
  const items = props.items.map((item: TabType) =>
    <Item key={item.name} to={item.to} exact>{item.name}</Item>
  )
  return (
    <Container>
      {items}
    </Container>
  )
}

export default Tabs
