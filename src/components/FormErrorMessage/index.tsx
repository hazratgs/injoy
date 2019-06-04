import React from 'react'
import { Error } from './styles'

interface IProps {
  children: React.ReactChild
}

const FormErrorMessage = (props: IProps) => (
  <Error>{props.children}</Error>
)

export default FormErrorMessage
