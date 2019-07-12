import React, { useState } from 'react'
import { connect } from 'react-redux'
import ProfileUploadAvatar from '../../components/ProfileUploadAvatar'
import { changeProfileField, updateProfile } from '../../actions/profile'
import Input from '../../components/Input'
import InputPhone from '../../components/InputPhone'
import Select from '../../components/Select'
import Button from '../../components/Button'
import ButtonTransparent from '../../components/ButtonTransparent'
import AppState from '../../types/state'
import { IProfileData } from '../../types/profile'
import { FieldType } from '../../types/field'
import dateOfBrith, { dateOfBrithRevert } from '../../utils/dateOfBrith'

import {
  Container,
  Content,
  Title,
  Form,
  Close
} from './styles'

interface IProps {
  profile: IProfileData
  countries: string[]
  cities: string[],
  errors: string[],
  checked: string[],
  changeProfileField: (filed: FieldType<string>) => void,
  updateProfile: () => void
}

const enhance = connect(
  (state: AppState) => ({
    profile: state.profile.data,
    errors: state.profile.errors,
    checked: state.profile.checked,
    countries: state.countries.countries,
    cities: state.countries.cities,
  }),
  { changeProfileField, updateProfile }
)

const ProfileEdit = (props: IProps) => {
  const { profile, errors, checked, cities, updateProfile, changeProfileField } = props
  const mobile = profile.mobile.indexOf('+') !== -1 ? profile.mobile : `+${profile.mobile}`

  const handle = (key: string) => (value: string): void => {
    if (key === 'dateOfBirth') value = dateOfBrith(value)
    changeProfileField({ key, value })
  }

  const disabled = () => {
    if (!checked.includes('dateOfBirth')) return true
    if (!checked.includes('nickName')) return true

    return false
  }

  return (
    <Container>
      <Content>
        <Close to='/profile' />
        <Title>Редактировать данные</Title>
        <ProfileUploadAvatar image='/images/profile/user.png' />
        <Form>
          <Input
            placeholder={'Имя'}
            checked={checked.includes('firstName')}
            error={errors.includes('firstName')}
            handle={handle('firstName')}
            value={profile.firstName}
          />
          <InputPhone
            placeholder='Номер'
            country='RU'
            error={errors.includes('mobile')}
            checked={checked.includes('mobile')}
            handle={handle}
            value={mobile}
          />
          <Input
            placeholder={'Фамилия'}
            checked={checked.includes('lastName')}
            error={errors.includes('lastName')}
            handle={handle('lastName')}
            value={profile.lastName}
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
            placeholder={'Nickname'}
            checked={checked.includes('nickName')}
            error={errors.includes('nickName')}
            handle={handle('nickName')}
            value={profile.nickName}
          />
          <Input
            placeholder='День рождения'
            error={errors.includes('dateOfBirth')}
            checked={checked.includes('dateOfBirth')}
            handle={handle('dateOfBirth')}
            value={dateOfBrithRevert(profile.dateOfBirth)}
            mask={[/[0-3]/, /[0-9]/, '.', /[0-1]/, /[0-9]/, '.', /[1-2]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            icon='/images/register/input-date.svg'
          />
        </Form>
        <Button onClick={updateProfile}>Продолжить</Button>
        <ButtonTransparent to='/profile'>Отмена</ButtonTransparent>
      </Content>
    </Container>
  )
}

export default enhance(ProfileEdit)
