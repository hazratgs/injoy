import React from 'react'
import { Container, Input, Icon } from './styles'

const HeaderSearch: React.FC = () => (
  <Container className='header-search'>
    <Icon src='/images/search-header.svg' alt='Search'/>
    <Input placeholder='Поиск материалов, предодавателей'/>
  </Container>
)

export default HeaderSearch
