import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { changeField, confirmCode, register } from '../../actions/register'
import { conformToMask } from 'react-text-mask'
import Input from '../../components/Input'
import Button from '../../components/Button'
import FormErrorMessage from '../../components/FormErrorMessage'
import secondsToTime from '../../utils/secondsToTime'
import { Container, Description } from './styles'
import { AppState } from '../../types/state'
import { FieldType } from '../../types/field'

interface IProps {
  code: string
  checked: string[]
  errors: string[]
  changeField: (field: FieldType<string>) => void,
  confirmCode: () => void,
  register: () => void
}

const enhance = connect(
  (state: AppState) => ({
    code: state.register.code,
    errors: state.register.errors,
    checked: state.register.checked
  }),
  { changeField, confirmCode, register }
)

const RegisterConfirm = (props: IProps) => {
  const { code, errors, checked, changeField, confirmCode, register } = props
  const pattern: RegExp[] = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]

  const confirm = conformToMask(code, pattern, { guide: false })
  const disabled: boolean = confirm.conformedValue.length < 5

  const [refreshTimeout, setRefreshTimeout] = useState<number>(0)
  const timeout: number = 300

  const [resend, setResend] = useState<boolean>(false)
  const [time, setTime] = useState<number>(timeout)

  const handle = (key: string) => (value: string): void => {
    changeField({ key, value })
  }

  const resendCode = (): void => {
    setResend(false)
    setTime(timeout)
    setRefreshTimeout(refreshTimeout + 1)

    // resend registration data to a get new code confirmed
    register()
  }

  const { minutes, seconds } = secondsToTime(time)

  useEffect((): void => {
    let seconds = timeout
    const timer = setInterval((): void => {
      if (!seconds) {
        clearInterval(timer)
        setResend(true)
      }
      setTime(seconds--)
    }, 1000)
  }, [refreshTimeout])

  return (
    <Container>
      {errors.includes('code') && <FormErrorMessage>Код введен неправильно</FormErrorMessage>}
      <Input
        placeholder='Введите код из SMS'
        mask={[/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
        error={errors.includes('code')}
        checked={checked.includes('code')}
        handle={handle('code')}
        autoFocus={true}
        value={code}
      />
      <Description>Выслать код через {minutes}:{seconds}</Description>
      {!resend ?
        <Button onClick={confirmCode} disabled={disabled}>Продолжить</Button> :
        <Button onClick={resendCode}>Отправить еще раз</Button>
      }
    </Container>
  )
}

export default enhance(RegisterConfirm)
