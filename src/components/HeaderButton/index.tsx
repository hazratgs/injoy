import React from 'react'
import { Container, Button, Icon } from './styles'

interface IProps {
  icon: string,
  title: string,
  border?: boolean,
  notif?: boolean
}

const HeaderButton = (props: IProps) => {
  const border = !!props.border
  const notif = !!props.notif
  return (
    <Container border={border}>
      <Button notif={notif}>
        <Icon src={props.icon} alt={props.title} />
      </Button>
    </Container>
  )
}

export default HeaderButton
