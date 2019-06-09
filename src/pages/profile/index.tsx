import React from 'react'
import { Route } from 'react-router-dom'
import ProfilePage from '../../containers/ProfilePage'
import { Container, Wrapper } from './styles'

const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <Route path='/profile' component={ProfilePage} />
      </Wrapper>
    </Container>
  )
}

export default Profile
