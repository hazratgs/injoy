import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeProfileField, updateProfile } from '../../actions/profile'
import RegisterHeader from '../../components/RegisterHeader'
import Checkbox from '../../components/Checkbox'
import Button from '../../components/Button'
import { AppState } from '../../types/state'
import { FieldType } from '../../types/field'
import { Wrapper, Container, Title } from './styles'

interface IProps extends RouteComponentProps {
  types: string[],
  roles: string[],
  changeProfileField: (field: FieldType<string[]>) => void,
  updateProfile: () => void
}

const enhance = connect(
  (state: AppState) => ({
    types: state.profile.types,
    roles: state.profile.data.roles
  }),
  { changeProfileField, updateProfile }
)

const RegisterType = (props: IProps) => {
  const { types, roles, changeProfileField, updateProfile } = props

  const handle = (key: string) => (value: string): void => {
    changeProfileField({
      key,
      value: !roles.includes(value) ?
        [...roles, value] :
        roles.filter((item: string) => item !== value)
    })
  }

  const submit = (): void => {
    updateProfile()
    props.history.push('/')
  }

  return (
    <Wrapper>
      <RegisterHeader back='/register/user-info' step={4} />
      <Container>
        <Title>В качестве кого вы регистрируетесь?</Title>
        <Checkbox
          items={types}
          checked={roles}
          handle={handle('roles')}
        />
        <Button onClick={submit} disabled={roles.length < 1}>Продолжить</Button>
      </Container>
    </Wrapper>
  )
}

export default withRouter(enhance(RegisterType))
