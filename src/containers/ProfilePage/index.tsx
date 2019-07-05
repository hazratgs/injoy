import React from 'react'
import { connect } from 'react-redux'
import ButtonOutline from '../../components/ButtonOutline'
import ProfileCard from '../../components/ProfileCard'
import ProfileProgress from '../../components/ProfileProgress'
import ProfileList from '../../components/ProfileList'
import ProfileEducation from '../../components/ProfileEducation'
import ProfileProject from '../../components/ProfileProject'
import { IProfileList, IProfileEducation, IProfileData } from '../../types/profile'
import { AppState } from '../../types/state'
import {
  Container,
  Head,
  Title,
  GroupTitle,
  Info
} from './styles'

interface IProps {
  profile: IProfileData
}

const enhance = connect(
  (state: AppState) => ({
    profile: state.profile.data
  })
)

const educations: IProfileList[] = [
  {
    id: 1,
    status: true,
    title: 'Новые подходы к обучению детей',
    date: '12.05.2019'
  },
  {
    id: 2,
    status: true,
    title: 'Онлайн-интенсивы для Product и Project-менеджеров',
    date: '07.03.2018'
  },
  {
    id: 3,
    status: true,
    title: 'Управление финансами',
    date: '07.03.2018'
  },
  {
    id: 4,
    status: true,
    title: 'Онлайн-интенсивы для Product и Project-менеджеров',
    date: '07.03.2018'
  }
]

const projects: IProfileEducation[] = [
  {
    id: 1,
    title: 'Новые подходы к обучению детей'
  },
  {
    id: 2,
    title: 'Онлайн-интенсивы для Product и Project-менеджеров'
  },
  {
    id: 3,
    title: 'Управление финансами'
  },
  {
    id: 4,
    title: 'Управление финансами'
  }
]

const renderEducation = (item: IProfileList) => <ProfileEducation key={item.id} {...item} />

const renderProject = (item: IProfileList) => <ProfileProject key={item.id} {...item} />

const ProfilePage = (props: IProps) => {
  return (
    <Container>
      <Head>
        <Title>Профиль</Title>
        <ButtonOutline to='/profile/edit' adaptive={true}>
          <>
            <img src='/images/profile/edit-icon.svg' alt='edit'/>
            <span>Редактировать</span>
          </>
        </ButtonOutline>
      </Head>
      <ProfileCard {...props.profile}/>
      <GroupTitle>
        Достижения
        <Info>
          <img src='/images/profile/info.svg' alt='' />
        </Info>
      </GroupTitle>
      <ProfileProgress />
      <GroupTitle>
        Образование
        <Info>
          <img src='/images/profile/info.svg' alt='' />
        </Info>
      </GroupTitle>
      <ProfileList<IProfileEducation> items={educations} render={renderEducation} />
      <GroupTitle>
        Проекты
        <Info>
          <img src='/images/profile/info.svg' alt='' />
        </Info>
      </GroupTitle>
      <ProfileList<IProfileList> items={projects} render={renderProject} />
    </Container>
  )
}

export default enhance(ProfilePage)
