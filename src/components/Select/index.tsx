import React from 'react'
import { IInputProps } from '../../types/inputs'
import {
  Container,
  Placeholder,
  SelectElement,
  Arrow
} from './styles'

interface IProps extends IInputProps {
  options: string[]
}

const Select = (props: IProps) => {
  const options = props.options.map(item =>
    <option key={item} value={item}>
      {item}
    </option>
  )
  const handle = (e: React.SyntheticEvent<HTMLSelectElement>): void => {
    props.handle(e.currentTarget.value)
  }

  return (
    <Container>
      <Placeholder>{props.placeholder}</Placeholder>
      <SelectElement
        checked={props.checked}
        error={props.error}
        full={true}
        onChange={handle}
        value={props.value}
      >
        {options}
      </SelectElement>
      <Arrow />
    </Container>
  )
}

export default Select
