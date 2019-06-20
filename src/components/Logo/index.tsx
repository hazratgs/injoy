import React from 'react'
import { LogoContainer } from './styles'

const Logo: React.FC = () => (
  <LogoContainer className='navbar-logo' to='/'>
    <img src='/images/logo.svg' alt='Injoy'/>
  </LogoContainer>
)

export default Logo
