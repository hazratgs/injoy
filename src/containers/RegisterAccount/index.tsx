import React, { useState } from 'react'
import { connect } from 'react-redux'
import { register } from '../../actions/register'
import Input from '../../components/Input'
import Buttom from '../../components/Button'
import FormErrorMessage from '../../components/FormErrorMessage'
import { IRegisterData } from '../../types/register'
import { Container, Title } from './styles'

interface IProps {
  register: (data: IRegisterData) => void
}

const enhance = connect(
  null,
  { register }
)

const RegisterAccount = (props: IProps) => {
  const [fields, setFields] = useState<IRegisterData>({
    firstName: 'Магомед',
    lastName: 'Анкалаев',
    login: 'hazratgs1',
    password: '123456',
    confirmPassword: '123456'
  })

  const [errors, setErrors] = useState<string[]>([])
  const [checked, setCheck] = useState<string[]>([])
  const [loginUsed, setLoginUsed] = useState<boolean>(false)

  const handle = (name: string) => (value: string): void => {
    const remove = () => setCheck(checked.filter(item => item !== name))

    if (errors.includes(name) && value !== '' && value.length > 2) {
      setErrors(errors.filter(item => item !== name))
    }

    setFields({ ...fields, [name]: value })

    if (name === 'login') {
      setLoginUsed(false)
    }

    if (name === 'password') {
      if (value.length > 6) {
        setCheck([...checked, name])
      } else {
        remove()
      }
    }

    if (name === 'confirmPassword') {
      if (checked.includes('password') && value === fields.password) {
        setCheck([...checked, name])
      } else {
        remove()
      }
    }
  }

  const submit = (): void => {
    const { firstName, lastName, login, password, confirmPassword } = fields
    const errors = []

    if (firstName.length < 2) errors.push('firstName')
    if (lastName.length < 2) errors.push('lastName')
    if (login.length < 2) errors.push('login')
    if (password.length < 6) errors.push('password')
    if (confirmPassword.length < 6 || confirmPassword !== password) errors.push('confirmPassword')

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
      // window.location.href = '/'
      props.register(fields)
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
      <Input
        placeholder={'Пароль'}
        checked={checked.includes('password')}
        error={errors.includes('password')}
        handle={handle('password')}
        type='password'
        value={fields.password}
      />
      <Input
        placeholder={'Повторите пароль'}
        checked={checked.includes('confirmPassword')}
        error={errors.includes('confirmPassword')}
        handle={handle('confirmPassword')}
        type='password'
        value={fields.confirmPassword}
      />
      <Buttom onClick={submit}>Продолжить</Buttom>
    </Container>
  )
}

export default enhance(RegisterAccount)
