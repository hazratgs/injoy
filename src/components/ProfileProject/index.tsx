import React from 'react'
import { Item } from './styles'
import { IProfileList } from '../../types/profile'

export const ProfileEducation = (props: IProfileList) => {
  return (
    <Item key={props.id}>
      <p>{props.title}</p>
    </Item>
  )
}

export default ProfileEducation
