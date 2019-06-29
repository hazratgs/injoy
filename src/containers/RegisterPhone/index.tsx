import React from 'react'
import { connect } from 'react-redux'
import { register, changeField } from '../../actions/register'
import InputPhone from '../../components/InputPhone'
import Button from '../../components/Button'
import FormErrorMessage from '../../components/FormErrorMessage'
import { AppState } from '../../types/state'
import { FieldType } from '../../types/field'
import { Container, Title } from './styles'

interface IProps {
  phone: string
  errors: string[],
  checked: string[],
  registerStatus: boolean,
  register: () => void,
  changeField: (field: FieldType) => void
}

const enhance = connect(
  (state: AppState) => ({
    phone: state.register.phone,
    errors: state.register.errors,
    checked: state.register.checked,
    registerStatus: state.register.registerStatus
  }),
  { register, changeField }
)

const RegisterPhone = (props: IProps) => {
  const { errors, checked, phone, register, changeField, registerStatus } = props
  const disabled = (): boolean => registerStatus ? registerStatus : !checked.includes('phone')
  const handle = (key: string) => (value: string) => changeField({ key, value })

  return (
    <Container>
      {errors.includes('phone') && <FormErrorMessage>Неправильно введен формат номера телефона</FormErrorMessage>}
      <Title>Для завершения регистрации, пожалуйста, укажите номер телефона</Title>
      <InputPhone
        placeholder='Номер'
        country='RU'
        error={errors.includes('phone')}
        checked={checked.includes('phone')}
        handle={handle('phone')}
        value={phone}
        autoFocus
      />
      <Button disabled={disabled()} onClick={register}>Продолжить</Button>
    </Container>
  )
}

export default enhance(RegisterPhone)
