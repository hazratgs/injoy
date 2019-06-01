import React from 'react'
import { Container, Link, Avatar, Wrapper, Name, Phone } from './style'
import { IUserProps } from '../../types/navigations'

const NavigationUser = (props: IUserProps) => {
  return (
    <Container>
      <Link to={props.path}>
        <Avatar src={props.img} alt={props.name} />
        <Wrapper>
          <Name>{props.name}</Name>
          <Phone>{props.phone}</Phone>
        </Wrapper>
      </Link>
    </Container>
  )
}

export default NavigationUser
