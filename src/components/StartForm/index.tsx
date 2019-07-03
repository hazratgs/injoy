import React from 'react'
import Input from '../../components/Input'
import InputPhone from '../../components/InputPhone'
import Buttom from '../../components/Button'
import { Link } from 'react-router-dom'
import { IFormTypeProps } from '../../types/register'
import { RegisterLink, FormWrapper, Title, Recovery } from './styles'

const RegisterTypeNewUser = (props: IFormTypeProps) => {
  const {
    title,
    header,
    mobile,
    password,
    changeField,
    submit,
    button,
    errors,
    checked,
    recovery
  } = props

  const handle = (key: string) => (value: string): void => {
    changeField({ key, value })
  }

  const disabled = () => {
    if (!checked.includes('mobile')) return true
    if (errors.length) return true
    if (password.length < 6) return true

    return false
  }

  return (
    <>
      <RegisterLink>
        {header.text} <Link to={header.to}>{header.link}</Link>
      </RegisterLink>
      <Title>{title}</Title>
      <FormWrapper>
        <InputPhone
          placeholder='Номер'
          country='RU'
          error={errors.includes('mobile')}
          checked={checked.includes('mobile')}
          handle={handle('mobile')}
          value={mobile}
          autoFocus
        />
        <Input
          placeholder={'Пароль'}
          error={errors.includes('password')}
          checked={checked.includes('password')}
          handle={handle('password')}
          value={password}
          type='password'
        />
        <Buttom disabled={disabled()} onClick={submit}>{button}</Buttom>
        {recovery && (
          <Recovery to='/auth/recovery'>Забыли пароль?</Recovery>
        )}
      </FormWrapper>
    </>
  )
}

export default RegisterTypeNewUser
