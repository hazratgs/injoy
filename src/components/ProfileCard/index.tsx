import React from 'react'
import {
  Container,
  Image,
  Circle,
  UserName,
  UserContact,
  UserContactItem
} from './styles'

const ProfileCard = () => {
  return (
    <Container>
      <Image>
        <img src='/images/profile/user.png' alt='' />
        <Circle />
      </Image>
      <UserName>
        <h2>Антон Куликов</h2>
        <span><b>@</b> antonykulikov</span>
      </UserName>
      <UserContact>
        <UserContactItem>
          <img src='/images/profile/phone.svg' alt='pgone' />
          <span>+7 (963) 668-22-82</span>
        </UserContactItem>
        <UserContactItem>
          <img src='/images/profile/city.svg' alt='city' />
          <span>Москва</span>
        </UserContactItem>
        <UserContactItem>
          <img src='/images/profile/date.svg' alt='brithDay' />
          <span>29.10.1989</span>
        </UserContactItem>
      </UserContact>
    </Container>
  )
}

export default ProfileCard
