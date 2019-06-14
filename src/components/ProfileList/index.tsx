import React, { useState } from 'react'
import { Container, ViewButton } from './styles'

interface IProps<T> {
  items: T[],
  render: (item: T) => JSX.Element
}

const viewQuanty = 2

function ProfileList<T>(props: IProps<T>): JSX.Element {
  const [view, setView] = useState<boolean>(false)

  const items = props.items.map((item, i) => {
    if (!view && i > viewQuanty) return null
    return props.render(item)
  })

  return (
    <Container>
      {items}
      <ViewButton onClick={() => setView(!view)}>{view ? 'Скрыть все' : 'Показать все'}</ViewButton>
    </Container>
  )
}

export default ProfileList
