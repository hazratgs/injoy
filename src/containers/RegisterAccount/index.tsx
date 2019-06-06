import React, { useState } from 'react'
import Input from '../../components/Input'
import Buttom from '../../components/Button'
import FormErrorMessage from '../../components/FormErrorMessage'
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
  const [loginUsed, setLoginUsed] = useState<boolean>(false)

  const handle = (name: string) => (value: string): void => {
    if (errors.includes(name) && value !== '' && value.length > 2) {
      setErrors(errors.filter(item => item !== name))
    }

    setFields({ ...fields, [name]: value })

    if (name === 'login') {
      const loginCheck = value !== '' && value.length > 2 ? ['login'] : []
      setCheck(loginCheck)
      setLoginUsed(false)
    }
  }

  const submit = (): void => {
    const { firstName, lastName, login } = fields
    const errors = []

    if (firstName === '' || firstName.length < 2) errors.push('firstName')
    if (lastName === '' || lastName.length < 2) errors.push('lastName')
    if (login === '' || login.length < 2) {
      errors.push('login')
    }

    if (login === 'hazratgs') {
      setLoginUsed(true)
      setCheck(checked.filter(item => item !== 'login'))
      errors.push('login')
    } else {
      setLoginUsed(false)
    }

    if (errors.length) {
      setErrors(errors)
    } else {
      window.location.href = '/'
    }
  }

  return (
    <Container>
      {loginUsed && (
        <FormErrorMessage>Этот nickname уже занят другим пользователем</FormErrorMessage>
      )}
      <Title>Введите данные</Title>
      <Input
        placeholder={'Имя'}
        checked={checked.includes('firstName')}
        error={errors.includes('firstName')}
        handle={handle('firstName')}
        value={fields.firstName}
      />
      <Input
        placeholder={'Фамилия'}
        checked={checked.includes('lastName')}
        error={errors.includes('lastName')}
        handle={handle('lastName')}
        value={fields.lastName}
      />
      <Input
        placeholder={'Nickname'}
        checked={checked.includes('login')}
        error={errors.includes('login')}
        handle={handle('login')}
        value={fields.login}
      />
      <Buttom onClick={submit}>Продолжить</Buttom>
    </Container>
  )
}

export default RegisterAccount
