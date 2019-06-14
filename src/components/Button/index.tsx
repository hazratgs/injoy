import React from 'react'
import { IButtonProps } from '../../types/buttons'
import { Element } from './styles'

const Button = (props: IButtonProps) => {
  return (
    <Element
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </Element>
  )
}

export default Button
