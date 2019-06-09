import React from 'react'
import { Element } from './styles'

interface IProps {
  to: string,
  children: React.ReactChild
}

const Button = (props: IProps) => {
  return (
    <Element to={props.to}>
      {props.children}
    </Element>
  )
}

export default Button
