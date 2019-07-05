import React from 'react'
import { Container, Link, Avatar, Wrapper, Name, Phone } from './style'
import { IProfileData } from '../../types/profile'

interface IProps extends IProfileData {
  handle: () => void
}

const NavigationUser = (props: IProps) => {
  return (
    <Container>
      <Link to='/profile' onClick={props.handle}>
        <Avatar src={props.avatar} alt={props.nickName} />
        <Wrapper>
          <Name>{props.firstName} {props.lastName}</Name>
          <Phone>{props.mobile}</Phone>
        </Wrapper>
      </Link>
    </Container>
  )
}

export default NavigationUser
