import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Container, Title } from './styles'

const RegisterPhone = () => {
  const handle = () => ({})
  const submit = () => ({})

  return (
    <Container>
      <Title>Для завершения регистрации, пожалуйста, укажите номер телефона</Title>
      <Input
        placeholder='Номер'
        error={false}
        checked={false}
        handle={handle}
      />
      <Button onClick={submit}>Продолжить</Button>
    </Container>
  )
}

export default RegisterPhone
