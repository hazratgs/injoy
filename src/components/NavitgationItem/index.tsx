import React from 'react'
import { Link, Icon, Title, Counter } from './styles'
import { IRouteProps } from '../../types/navigations'

const NavitgationItem = (props: IRouteProps) => {
  const { handle } = props
  return (
    <Link to={props.path} exact onClick={handle}>
      <Icon src={props.icon} alt={props.title} />
      <Title>{props.title}</Title>
      <Counter>{props.counter}</Counter>
    </Link>
  )
}

export default NavitgationItem
