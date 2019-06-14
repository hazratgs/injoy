import React from 'react'
import { ILinkProps } from '../../types/buttons'
import { Element } from './styles'

const ButtonTransparent = (props: ILinkProps) => {
  return (
    <Element to={props.to}>
      {props.children}
    </Element>
  )
}

export default ButtonTransparent
