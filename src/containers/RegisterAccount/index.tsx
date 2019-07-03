import React from 'react'
import { connect } from 'react-redux'
import { changeField, verificationAccount } from '../../actions/register'
import Input from '../../components/Input'
import Buttom from '../../components/Button'
import FormErrorMessage from '../../components/FormErrorMessage'
import { FieldType } from '../../types/field'
import { AppState } from '../../types/state'
import { Container, Title } from './styles'

interface IProps {
  firstName: string,
  lastName: string,
  login: string,
  password: string,
  confirmPassword: string,
  errors: string[],
  checked: string[],
  verificationAccount: () => void,
  changeField: (field: FieldType<string>) => void
}

const enhance = connect(
  (state: AppState) => ({
    firstName: state.register.firstName,
    lastName: state.register.lastName,
    mobile: state.register.mobile,
    password: state.register.password,
    errors: state.register.errors,
    checked: state.register.checked
  }),
  { verificationAccount, changeField }
)

const RegisterAccount = (props: IProps) => {
  const { errors, checked } = props

  const handle = (key: string) => (value: string): void => {
    props.changeField({ key, value })
  }

  return (
    <Container>
      {errors.includes('login') && (
        <FormErrorMessage>Этот nickname уже занят другим пользователем</FormErrorMessage>
      )}
      <Title>Введите данные</Title>
      <Input
        placeholder={'Имя'}
        error={errors.includes('firstName')}
        handle={handle('firstName')}
        value={props.firstName}
      />
      <Input
        placeholder={'Фамилия'}
        error={errors.includes('lastName')}
        handle={handle('lastName')}
        value={props.lastName}
      />
      <Input
        placeholder={'Nickname'}
        error={errors.includes('login')}
        checked={checked.includes('login')}
        handle={handle('login')}
        value={props.login}
      />
      <Input
        placeholder={'Пароль'}
        error={errors.includes('password')}
        checked={checked.includes('password')}
        handle={handle('password')}
        type='password'
        value={props.password}
      />
      <Input
        placeholder={'Повторите пароль'}
        error={errors.includes('confirmPassword')}
        checked={checked.includes('confirmPassword')}
        handle={handle('confirmPassword')}
        type='password'
        value={props.confirmPassword}
      />
      <Buttom onClick={props.verificationAccount}>Продолжить</Buttom>
    </Container>
  )
}

export default enhance(RegisterAccount)
