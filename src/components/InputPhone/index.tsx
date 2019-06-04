import React from 'react'
import PhoneInput from 'react-phone-number-input'
import { Container, Placeholder, InputElement, Error, Checked } from './styles'

interface IProps {
  placeholder: string,
  country: string,
  error: boolean,
  checked: boolean,
  value: string,
  handle: (value: string) => void
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
        />
      </InputElement>
      <Placeholder>{props.placeholder}</Placeholder>
      {props.error && <Error />}
      {props.checked && <Checked />}
    </Container>
  )
}

export default InputPhone
