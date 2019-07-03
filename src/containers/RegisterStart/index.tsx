import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeField as changeFieldAuth, loginUser } from '../../actions/auth'
import { changeField as changeFieldRegister, register as registerUser } from '../../actions/register'
import StartForm from '../../components/StartForm'
import { AppState } from '../../types/state'
import { IFormType } from '../../types/register'
import { FieldType } from '../../types/field'
import {
  Container,
  VideoWraper,
  VideoImages,
  Player,
  VideoDescription,
  VideoLogo,
  VideoDescriptionText,
  Content,
  Description,
  Buttons,
  Button
} from './styles'

interface Type extends IFormType {
  mobile: string,
  password: string,
  errors: string[],
  checked: string[]
}

interface IProps {
  auth: Type,
  register: Type,
  changeFieldAuth: (field: FieldType<string>) => void,
  changeFieldRegister: (field: FieldType<string>) => void,
  loginUser: () => void,
  registerUser: () => void
}

const enhance = connect(
  (state: AppState) => ({
    auth: {
      title: 'Войдите',
      header: {
        text: 'Еще не с нами?',
        link: 'Зарегистрируйтесь',
        to: '/'
      },
      mobile: state.auth.mobile,
      password: state.auth.password,
      errors: state.auth.errors,
      checked: state.auth.checked,
      submit: () => ({}),
      button: 'Войти',
      recovery: true
    },
    register: {
      title: 'Зарегистрируйтесь',
      header: {
        text: 'Есть аккаунт?',
        link: 'Войдите',
        to: '/auth'
      },
      mobile: state.register.mobile,
      password: state.register.password,
      errors: state.register.errors,
      checked: state.register.checked,
      submit: () => ({}),
      button: 'Зарегистрироваться'
    }
  }),
  { changeFieldAuth, changeFieldRegister, loginUser, registerUser }
)

const RegisterStart = (props: IProps) => {
  const auth = {
    ...props.auth,
    changeField: props.changeFieldAuth,
    submit: props.loginUser
  }
  const register = {
    ...props.register,
    changeField: props.changeFieldRegister,
    submit: props.registerUser
  }

  return (
    <Container>
      <VideoWraper>
        <VideoImages>
          <Player>
            <img src='/images/register/play-button.svg' alt='play' />
          </Player>
        </VideoImages>
        <VideoDescription>
          <VideoLogo src='/images/register/injoy-logo.svg' alt='injoy' />
          <VideoDescriptionText>
            <strong>Injoy.org</strong> – международная образовательная платформа
        </VideoDescriptionText>
        </VideoDescription>
      </VideoWraper>
      <Content>
        <Switch>
          <Route path='/' exact render={() => <StartForm {...register} />} />
          <Route path='/auth' exact render={() => <StartForm {...auth} />} />
        </Switch>
        <Buttons>
          <Description>или войдите через социальную сеть</Description>
          <Button href='#'>
            <img src='/images/register/facebook.svg' alt='' />
          </Button>
          <Button href='#'>
            <img src='/images/register/vk.svg' alt='' />
          </Button>
        </Buttons>
      </Content>
    </Container>
  )
}

export default enhance(RegisterStart)
