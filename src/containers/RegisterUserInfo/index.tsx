import React, { useState } from 'react'
import Button from '../../components/Button'
import Select from '../../components/Select'
import Input from '../../components/Input'
import FormErrorMessage from '../../components/FormErrorMessage'
import isDate from '../../utils/isDate'
import { Container, Title } from './styles'

interface IFiels {
  country: string,
  city: string,
  brithDay: string
}

const country: string[] = [
  'Россия',
  'Украина',
  'Белорусия'
]

const city: string[] = [
  'Москва',
  'Санкт-Петербург'
]

const RegisterUserInfo = () => {
  const [fields, setFields] = useState<IFiels>({
    country: '',
    city: '',
    brithDay: ''
  })
  const [errors, setErrors] = useState<string[]>([])
  const [checked, setChecked] = useState<string[]>([])

  const handle = (name: string) => (value: string): void => {
    setFields({ ...fields, [name]: value })
    setErrors(errors.filter(item => item !== name))

    if (name === 'brithDay' && isDate(value)) {
      setChecked([...checked, name])
    } else {
      setChecked(checked.filter(item => item !== 'brithDay'))
    }
  }

  const submit = (): void => {
    const errors: string[] = []
    
    if (!isDate(fields.brithDay)) errors.push('brithDay')

    if (errors.length) {
      setErrors(errors)
    } else {

    }
  }

  return (
    <Container>
      {errors.length ?
        <FormErrorMessage>Пожалуста, заполните все обязательные поля</FormErrorMessage> :
        null
      }
      <Title>Укажите ваш город и возраст</Title>
      <Select
        placeholder='Страна'
        error={errors.includes('country')}
        checked={checked.includes('country')}
        value={fields.country}
        options={country}
        handle={handle('country')}
      />
      <Select
        placeholder='Город'
        error={errors.includes('city')}
        checked={checked.includes('city')}
        value={fields.city}
        options={city}
        handle={handle('city')}
      />
      <Input
        placeholder='День рождения'
        error={errors.includes('brithDay')}
        checked={checked.includes('brithDay')}
        handle={handle('brithDay')}
        value={fields.brithDay}
        mask={[/[0-3]/, /[0-9]/, '.', /[0-1]/, /[0-9]/, '.', /[1-2]/, /[0-9]/, /[0-9]/, /[0-9]/]}
        icon='/images/register/input-date.svg'
      />
      <Button onClick={submit}>Продолжить</Button>
    </Container>
  )
}

export default RegisterUserInfo
