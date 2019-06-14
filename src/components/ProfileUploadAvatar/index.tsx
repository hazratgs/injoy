import React from 'react'
import { Avatar } from './styles'

interface IProps {
  image: string
}

const ProfileUploadAvatar = (props: IProps) => {
  return (
    <Avatar to='/profile/edit/upload'>
      <img className='avatar' src={props.image} alt='' />
      <img className='upload-avatar' src='/images/profile/upload-avatar.svg' alt='' />
    </Avatar>
  )
}

export default ProfileUploadAvatar
