import React from 'react'
import { connect } from 'react-redux'
import ButtonOutline from '../../components/ButtonOutline'
import ProfileCard from '../../components/ProfileCard'
import ProfileProgress from '../../components/ProfileProgress'
import ProfileList from '../../components/ProfileList'
import ProfileEducation from '../../components/ProfileEducation'
import ProfileProject from '../../components/ProfileProject'
import { IProfileList, IProfileData } from '../../types/profile'
import { AppState } from '../../types/state'
import {
  Container,
  Head,
  Title,
  GroupTitle,
  Info
} from './styles'

interface IProps {
  profile: IProfileData,
  educations: IProfileList[],
  projects: IProfileList[]
}

const enhance = connect(
  (state: AppState) => ({
    profile: state.profile.data,
    educations: state.profile.educations,
    projects: state.profile.projects
  })
)

const renderEducation = (item: IProfileList) => <ProfileEducation key={item.id} {...item} />
const renderProject = (item: IProfileList) => <ProfileProject key={item.id} {...item} />

const ProfilePage = (props: IProps) => {
  const { educations, projects } = props
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
      <ProfileList<IProfileList> items={educations} render={renderEducation} />
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
