import React, { useState } from 'react'
import InputPhone from '../../components/InputPhone'
import { isValidPhoneNumber } from 'react-phone-number-input/max'
import Button from '../../components/Button'
import FormErrorMessage from '../../components/FormErrorMessage'
import { Container, Title } from './styles'

const RegisterPhone = () => {
  const [phone, setPhone] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [checked, setChecked] = useState<boolean>(false)

  const handle = (value: string) => {
    setPhone(value)
    setError(false)
    setChecked(isValidPhoneNumber(value))
  }

  const submit = () => {
    const error = []
  
    if (!isValidPhoneNumber(phone)) error.push('isValidPhoneNumber')

    if (error.length) {
      setError(true)
    } else {
      setChecked(true)
      setError(false)
    }
  }

  return (
    <Container>
      {error && <FormErrorMessage>Неправильно введен формат номера телефона</FormErrorMessage>}
      <Title>Для завершения регистрации, пожалуйста, укажите номер телефона</Title>
      <InputPhone
        placeholder='Номер'
        country='RU'
        error={error}
        checked={checked}
        handle={handle}
        value={phone}
      />
      <Button onClick={submit}>Продолжить</Button>
    </Container>
  )
}

export default RegisterPhone
