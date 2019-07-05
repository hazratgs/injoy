import React from 'react'
import { IProfileData } from '../../types/profile'
import {
  Container,
  Image,
  Circle,
  UserName,
  UserContact,
  UserContactItem
} from './styles'

const ProfileCard = (props: IProfileData) => {
  return (
    <Container>
      <Image>
        <img src={props.avatar} alt='' />
        <Circle />
      </Image>
      <UserName>
        <h2>{props.firstName} {props.lastName}</h2>
        <span><b>@</b> {props.nickName}</span>
      </UserName>
      <UserContact>
        <UserContactItem>
          <img src='/images/profile/phone.svg' alt='pgone' />
          <span>{props.mobile}</span>
        </UserContactItem>
        <UserContactItem>
          <img src='/images/profile/city.svg' alt='city' />
          <span>{props.country}, {props.city}</span>
        </UserContactItem>
        <UserContactItem>
          <img src='/images/profile/date.svg' alt='brithDay' />
          <span>{props.dateOfBirth}</span>
        </UserContactItem>
      </UserContact>
    </Container>
  )
}

export default ProfileCard
