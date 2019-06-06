import React, { useState } from 'react'
import { IInputProps } from '../../types/inputs'
import MaskedInput from 'react-text-mask'
import { Container, Placeholder, InputElement, Error, Checked, Icon } from './styles'

const Input = (props: IInputProps) => {
  const autoFocus = !!props.autoFocus
  const [full, setFull] = useState<boolean>(false)

  const onChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    const value: string = e.currentTarget.value
    setFull(!!e.currentTarget.value)
    props.handle(value)
  }

  return (
    <Container>
      <MaskedInput
        mask={props.mask}
        onChange={onChange}
        defaultValue={props.value}
        render={(ref, _props) => (
          <InputElement
            ref={ref}
            onChange={onChange}
            full={full}
            error={props.error}
            checked={props.checked}
            autoFocus={autoFocus}
            {..._props}
          />
        )}
      />
      <Placeholder>{props.placeholder}</Placeholder>
      {props.error && <Error />}
      {props.checked && <Checked />}
      {props.icon && <Icon src={props.icon} />}
    </Container>
  )
}

Input.defaultProps = {
  mask: false,
  value: ''
}

export default Input
