import React from 'react'
import PhoneInput from 'react-phone-number-input'
import { IInputProps } from '../../types/inputs'
import { Container, Placeholder, InputElement, Error, Checked } from './styles'

interface IProps extends IInputProps {
  country: string
}

const InputPhone = (props: IProps) => {
  const onChange = (value: string): void => {
    props.handle(value)
  }

  return (
    <Container>
      <InputElement
        full={true}
        error={props.error}
        checked={props.checked}
      >
        <PhoneInput
          value={props.value}
          country={props.country}
          onChange={onChange}
          autoFocus
          autoComplete='off'
        />
      </InputElement>
      <Placeholder>{props.placeholder}</Placeholder>
      {props.error && <Error />}
      {props.checked && <Checked />}
    </Container>
  )
}

export default InputPhone
