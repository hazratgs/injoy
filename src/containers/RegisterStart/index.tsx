import React from 'react'
import {
  Container,
  VideoWraper,
  VideoImages,
  Player,
  VideoDescription,
  VideoLogo,
  VideoDescriptionText,
  Content,
  Title,
  Description,
  Buttons,
  Button
} from './styles'

const RegisterStart = () => (
  <Container>
    <VideoWraper>
      <VideoImages>
        <Player>
          <img src='/register/play-button.svg' alt='play' />
        </Player>
      </VideoImages>
      <VideoDescription>
        <VideoLogo src='/register/injoy-logo.svg' alt='injoy' />
        <VideoDescriptionText>
          <strong>Injoy.org</strong> – международная образовательная платформа
        </VideoDescriptionText>
      </VideoDescription>
    </VideoWraper>
    <Content>
      <Title>Зарегистрируйтесь</Title>
      <Description>через социальную сеть</Description>
      <Buttons>
        <Button href='#'>
          <img src='/register/facebook.svg' alt='' />
        </Button>
        <Button href='#'>
          <img src='/register/vk.svg' alt='' />
        </Button>
      </Buttons>
    </Content>
  </Container>
)

export default RegisterStart
