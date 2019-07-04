import React from 'react'
import { ICheckboxProps, LabelItem } from '../../types/inputs'
import { Container, Label, Input, Text } from './styles'

const Checkbox = (props: ICheckboxProps) => {
  const handle = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    props.handle(value)
  }

  const items = props.items.map((item: LabelItem) => {
    return (
      <Label key={item.key}>
        <input
          type='checkbox'
          onClick={handle}
          value={item.label}
          defaultChecked={props.checked.includes(item.label)}
        />
        <Input />
        <Text>{item.key}</Text>
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
