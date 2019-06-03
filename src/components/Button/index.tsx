import React from 'react'
import { Element } from './styles'

interface IProps {
  children: React.ReactChild,
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void,
  disabled?: boolean
}

const Button = (props: IProps) => {
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
