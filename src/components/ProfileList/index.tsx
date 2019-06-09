import React, { useState } from 'react'
import { Container, ViewButton } from './styles'
import { IProfileList } from '../../types/profile'


interface IProps {
  items: IProfileList[],
  render: (item: IProfileList) => JSX.Element
}

const viewQuanty = 2

export const ProfileEducation = (props: IProps) => {
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

export default ProfileEducation
