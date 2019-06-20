import React from 'react'
import { Link, Icon, Title, Counter } from './styles'
import { IRouteProps } from '../../types/navigations'

const NavitgationItem = (props: IRouteProps) => {
  return (
    <Link to={props.path} exact>
      <Icon src={props.icon} alt={props.title} />
      <Title>{props.title}</Title>
      <Counter>{props.counter}</Counter>
    </Link>
  )
}

export default NavitgationItem
