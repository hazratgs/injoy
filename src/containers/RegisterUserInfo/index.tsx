import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import Button from '../../components/Button'
import Select from '../../components/Select'
import Input from '../../components/Input'
import FormErrorMessage from '../../components/FormErrorMessage'
import { changeProfileField } from '../../actions/profile'
import { IProfileData } from '../../types/profile'
import { FieldType } from '../../types/field'
import { AppState } from '../../types/state'
import { Container, Title } from './styles'

interface IProps {
  profile: IProfileData,
  checked: string[],
  errors: string[],
  countries: string[],
  cities: string[],
  changeProfileField: (filed: FieldType) => void,
  push: (path: string) => void
}

const enhance = connect(
  (state: AppState) => ({
    profile: state.profile.data,
    checked: state.profile.checked,
    errors: state.profile.errors,
    countries: state.countries.countries,
    cities: state.countries.cities
  }),
  { changeProfileField, push }
)

const RegisterUserInfo = (props: IProps) => {
  const { profile, errors, checked, countries, cities, changeProfileField, push } = props

  const handle = (key: string) => (value: string): void => {
    changeProfileField({ key, value })
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
        value={profile.country}
        options={countries}
        handle={handle('country')}
      />
      <Select
        placeholder='Город'
        error={errors.includes('city')}
        checked={checked.includes('city')}
        value={profile.city}
        options={cities}
        handle={handle('city')}
      />
      <Input
        placeholder='День рождения'
        error={errors.includes('dateOfBirth')}
        checked={checked.includes('dateOfBirth')}
        handle={handle('dateOfBirth')}
        value={profile.dateOfBirth}
        mask={[/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
        icon='/images/register/input-date.svg'
      />
      <Button
        disabled={!checked.includes('dateOfBirth')}
        onClick={() => push('/register/type')}
      >
        Продолжить
      </Button>
    </Container>
  )
}

export default enhance(RegisterUserInfo)
