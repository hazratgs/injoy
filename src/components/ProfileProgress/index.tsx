import React from 'react'
import {
  Container,
  Wrapper,
  Item
} from './styles'

const ProfileProgress = () => {
  return (
    <Container>
      <Wrapper>
        <Item>
          <div className='img'>
            <img src='/images/profile/progress/1.svg' alt='' />
          </div>
          <span>Основатель injoy</span>
        </Item>
        <Item>
          <div className='img'>
            <img src='/images/profile/progress/2.svg' alt='' />
          </div>
          <span>Преподователь</span>
        </Item>
        <Item>
          <div className='img'>
            <img src='/images/profile/progress/3.svg' alt='' />
          </div>
          <span>Автор курсов</span>
        </Item>
      </Wrapper>
    </Container>
  )
}

export default ProfileProgress
