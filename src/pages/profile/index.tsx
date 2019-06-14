import React from 'react'
import { Route } from 'react-router-dom'
import ProfilePage from '../../containers/ProfilePage'
import ProfileEdit from '../../containers/ProfileEdit'
import { Container, Wrapper } from './styles'

const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <Route path='/profile' component={ProfilePage} />
        <Route path='/profile/edit' component={ProfileEdit} />
      </Wrapper>
    </Container>
  )
}

export default Profile
