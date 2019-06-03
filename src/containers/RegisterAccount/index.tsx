import React, { useState } from 'react'
import Input from '../../components/Input'
import Buttom from '../../components/Button'
import { Container, Title } from './styles'

interface IFields {
  firstName: string,
  lastName: string,
  login: string
}

const RegisterAccount = () => {
  const [fields, setFields] = useState<IFields>({
    firstName: '',
    lastName: '',
    login: ''
  })

  const [errors, setErrors] = useState<string[]>([])
  const [checked, setCheck] = useState<string[]>([])

  const handle = (name: string) => (value: string): void => {
    if (errors.includes(name) && value !== '' && value.length > 2) {
      setErrors(errors.filter(item => item !== name))
    }

    setFields({ ...fields, [name]: value })

    if (name === 'login') {
      const loginCheck = value !== '' && value.length > 2 ? ['login'] : []
      setCheck(loginCheck)
    }
  }

  const submit = (): void => {
    const { firstName, lastName, login } = fields
    const errors = []

    if (firstName === '' || firstName.length < 2) errors.push('firstName')
    if (lastName === '' || lastName.length < 2) errors.push('lastName')
    if (login === '' || login.length < 2) errors.push('login')

    if (errors.length) {
      setErrors(errors)
    } else {
      window.location.href = '/'
    }
  }

  return (
    <Container>
      <Title>Введите данные</Title>
      <Input
        placeholder={'Имя'}
        checked={checked.includes('firstName')}
        error={errors.includes('firstName')}
        handle={handle('firstName')}
      />
      <Input
        placeholder={'Фамилия'}
        checked={checked.includes('lastName')}
        error={errors.includes('lastName')}
        handle={handle('lastName')}
      />
      <Input
        placeholder={'Nickname'}
        checked={checked.includes('login')}
        error={errors.includes('login')}
        handle={handle('login')}
      />
      <Buttom onClick={submit}>Продолжить</Buttom>
    </Container>
  )
}

export default RegisterAccount
