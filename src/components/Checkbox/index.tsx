import React from 'react'
import { ICheckboxProps } from '../../types/inputs'
import { Container, Label, Input, Text } from './styles'

const Checkbox = (props: ICheckboxProps) => {
  const handle = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    props.handle(value)
  }

  const items = props.items.map(item => {
    return (
      <Label key={item}>
        <input
          type='checkbox'
          onClick={handle}
          value={item}
          defaultChecked={props.checked.includes(item)}
        />
        <Input />
        <Text>{item}</Text>
      </Label>
    )
  })

  return (
    <Container>
      {items}
    </Container>
  )
}

export default Checkbox
