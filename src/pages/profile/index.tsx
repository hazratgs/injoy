import React from 'react'
import { Route } from 'react-router-dom'
import ProfilePage from '../../containers/ProfilePage'
import ProfileEdit from '../../containers/ProfileEdit'
import ProfileUpload from '../../containers/ProfileUpload'
import { Container, Wrapper } from './styles'

const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <Route path='/profile' component={ProfilePage} />
        <Route path='/profile/edit' exact component={ProfileEdit} />
        <Route path='/profile/edit/upload' exact component={ProfileUpload} />
      </Wrapper>
    </Container>
  )
}

export default Profile
