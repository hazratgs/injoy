import React, { useState } from 'react'
import { Container, Placeholder, InputElement, Error, Checked } from './styles'

interface IProps {
  placeholder: string,
  error: boolean,
  checked: boolean,
  handle: (value: string) => void
}

const Input = (props: IProps) => {
  const [full, setFull] = useState(false)

  const onChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    const value: string = e.currentTarget.value
    setFull(!!e.currentTarget.value)
    props.handle(value)
  }

  return (
    <Container>
      <InputElement
        onChange={onChange}
        full={full}
        error={props.error}
        checked={props.checked}
      />
      <Placeholder>{props.placeholder}</Placeholder>
      {props.error && <Error />}
      {props.checked && <Checked />}
    </Container>
  )
}

export default Input
