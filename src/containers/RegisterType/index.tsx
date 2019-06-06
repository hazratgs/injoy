import React, { useState } from 'react'
import Checkbox from '../../components/Checkbox'
import Button from '../../components/Button'
import { Container, Title } from './styles'

const types: string[] = [
  'Преподователь',
  'Школьник',
  'Студент',
  'Родитель школьника',
  'Автор курсов',
  'Представитель образовательного учреждения',
  'Инвестор',
  'Другое'
]

const RegisterType = () => {
  const [checked, setChecked] = useState<string[]>([])
  const handle = (value: string): void => {
    const update = checked.includes(value) ?
      checked.filter((item: string) => item !== value) :
      [...checked, value]

      setChecked(update)
  }

  const submit = (): void => {

  }

  console.log(checked)
  return (
    <Container>
      <Title>В качестве кого вы регистрируетесь?</Title>
      <Checkbox
        items={types}
        checked={checked}
        handle={handle}
      />
      <Button onClick={submit}>Продолжить</Button>
    </Container>
  )
}

export default RegisterType
