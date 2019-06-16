import React from 'react'
import { Item } from './styles'
import { IProfileList } from '../../types/profile'

export const ProfileProject = (props: IProfileList) => {
  return (
    <Item key={props.id}>
      <img src='/images/profile/check.svg' alt='check' />
      <p>{props.title}</p>
      <span>{props.date}</span>
    </Item>
  )
}

export default ProfileProject
