import React from 'react'
import { connect } from 'react-redux'
import { newUser as close } from '../../actions/register'
import { Container, Popup, Title, Description, Button } from './styles'
import { AppState } from '../../types/state'

interface IProps {
  newUser: boolean,
  close: (val: boolean) => void
}

const enhance = connect(
  (state: AppState) => ({
    newUser: state.register.newUser
  }),
  { close }
)

const NewsUserPopup = (props: IProps) => {
  const { newUser, close } = props

  if (!newUser) return null

  return (
    <Container>
      <Popup>
        <Title>Приветствуем на платформе инновационного <br />образования Injoy!</Title>
        <Description>
          <p>Ваш аккаунт был указан, как «Преподователь»‎ с уже выбранными курсами. Вы найдете их в разделе «Мои курсы и проекты»‎.</p>
          <p>Весь каталог курсов и образовательных проектов, а так же прочий функционал платформы будет доступен позже.</p>
        </Description>
        <Button onClick={(close.bind(null, false))}>Продолжить</Button>
      </Popup>
    </Container>
  )
}

export default enhance(NewsUserPopup)
