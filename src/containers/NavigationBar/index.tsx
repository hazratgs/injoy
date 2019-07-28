import React from 'react'
import { connect } from 'react-redux'
import { changeVisibilityNavBar } from '../../actions/navigations'
import { AppState } from '../../types/state'
import Logo from '../../components/Logo'
import NavigationItem from '../../components/NavitgationItem'
import NavigationUser from '../../components/NavigationUser'
import HeaderSearch from '../../components/HeaderSearch'
import { Container, Wrapper } from './styles'
import { IRouteProps } from '../../types/navigations'
import { IProfileData } from '../../types/profile'

interface IProps {
  profile: IProfileData
  visibility: boolean
  routes: IRouteProps[]
  changeVisibilityNavBar: () => void
}

const enhance = connect(
  (state: AppState) => ({
    profile: state.profile.data,
    visibility: state.navigations.visibility,
    routes: state.navigations.routes
  }),
  { changeVisibilityNavBar }
)

const NavigationBar = (props: IProps) => {
  const { visibility, routes } = props
  const items = routes.map(item => (
    <NavigationItem
      key={item.path}
      handle={props.changeVisibilityNavBar}
      {...item}
    />
  ))

  return (
    <Container visibility={visibility}>
      <Logo />
      <HeaderSearch />
      <NavigationUser handle={props.changeVisibilityNavBar} {...props.profile} />
      <Wrapper>
        {items}
      </Wrapper>
    </Container>
  )
}

export default enhance(NavigationBar)
