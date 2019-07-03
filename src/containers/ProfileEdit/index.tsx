import React, { useState } from 'react'
import ProfileUploadAvatar from '../../components/ProfileUploadAvatar'
import Input from '../../components/Input'
import InputPhone from '../../components/InputPhone'
import Select from '../../components/Select'
import Button from '../../components/Button'
import ButtonTransparent from '../../components/ButtonTransparent'
import isDate from '../../utils/isDate'

import {
  Container,
  Content,
  Title,
  Form
} from './styles'

interface IFields {
  firstName: string,
  lastName: string,
  login: string,
  phone: string,
  city: string,
  brithDay: string
}

const city: string[] = [
  'Москва',
  'Санкт-Петербург'
]

const ProfileEdit = () => {
  const [fields, setFields] = useState<IFields>({
    firstName: 'Хазрат',
    lastName: 'Гаджикеримов',
    login: 'hazratgs',
    phone: '+79282194199',
    city: 'Москва',
    brithDay: '30.07.1992'
  })

  const [errors, setErrors] = useState<string[]>([])
  const [checked, setCheck] = useState<string[]>([])
  // const [loginUsed, setLoginUsed] = useState<boolean>(false)

  const handle = (name: string) => (value: string): void => {
    if (errors.includes(name) && value !== '' && value.length > 2) {
      setErrors(errors.filter(item => item !== name))
    }

    setFields({ ...fields, [name]: value })

    if (name === 'login') {
      const loginCheck = value !== '' && value.length > 2 ? ['login'] : []
      setCheck(loginCheck)
      // setLoginUsed(false)
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
      <Content>
        <Title>Редактировать данные</Title>
        <ProfileUploadAvatar image='/images/profile/user.png' />
        <Form>
          <Input
            placeholder={'Имя'}
            checked={checked.includes('firstName')}
            error={errors.includes('firstName')}
            handle={handle('firstName')}
            value={fields.firstName}
          />
          <InputPhone
            placeholder='Номер'
            country='RU'
            error={errors.includes('phone')}
            checked={checked.includes('phone')}
            handle={handle}
            value={fields.phone}
          />
          <Input
            placeholder={'Фамилия'}
            checked={checked.includes('lastName')}
            error={errors.includes('lastName')}
            handle={handle('lastName')}
            value={fields.lastName}
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
            placeholder={'Nickname'}
            checked={checked.includes('login')}
            error={errors.includes('login')}
            handle={handle('login')}
            value={fields.login}
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
        </Form>
        <Button onClick={submit}>Продолжить</Button>
        <ButtonTransparent to='/profile'>Отмена</ButtonTransparent>
      </Content>
    </Container>
  )
}

export default ProfileEdit
