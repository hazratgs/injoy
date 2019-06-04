import React, { useState, useEffect } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import FormErrorMessage from '../../components/FormErrorMessage'
import secondsToTime from '../../utils/secondsToTime'
import { Container, Description } from './styles'

const RegisterConfirm = () => {
  const [refreshTimeout, setRefreshTimeout] = useState<number>(0)
  const timeout: number = 30

  const [code, setCode] = useState<string>()
  const [resend, setResend] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(true)
  const [checked, setChecked] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [time, setTime] = useState<number>(timeout)

  const handle = (value: string): void => {
    setCode(value)
    setError(false)
    setDisabled(!(value.length >= 4))
  }

  const submit = (): void => {
    if (code === '170515') {
      setChecked(true)
    } else {
      setError(true)
      setDisabled(true)
    }
  }

  const resendCode = (): void => {
    setResend(false)
    setTime(timeout)
    setRefreshTimeout(refreshTimeout + 1)
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
      {error && <FormErrorMessage>Код введен неправильно</FormErrorMessage>}
      <Input
        placeholder='Введите код из SMS'
        error={error}
        checked={checked}
        handle={handle}
        autoFocus={true}
      />
      <Description>Выслать код через {minutes}:{seconds}</Description>
      {!resend ?
        <Button onClick={submit} disabled={disabled}>Продолжить</Button> :
        <Button onClick={resendCode}>Отправить еще раз</Button>
      }
    </Container>
  )
}

export default RegisterConfirm
