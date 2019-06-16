import React from 'react'
import { ILinkProps } from '../../types/buttons'
import { Element } from './styles'

const Button = (props: ILinkProps) => {
  return (
    <Element to={props.to} adaptive={props.adaptive}>
      {props.children}
    </Element>
  )
}

export default Button
