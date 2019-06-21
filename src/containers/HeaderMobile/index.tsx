import React from 'react'
import { connect } from 'react-redux'
import { changeVisibilityNavBar } from '../../actions/navigations'
import { AppState } from '../../types/state'
import Logo from '../../components/Logo'
import HeaderButton from '../../components/HeaderButton'
import { Container, Menu } from './styles'

interface IProps {
  visibility: boolean,
  changeVisibilityNavBar: any
}

const enhance = connect(
  (state: AppState) => ({ visibility: state.navigations.visibility }),
  { changeVisibilityNavBar }
)

const HeaderMobile = (props: IProps) => {
  return (
    <Container>
      <Logo />
      <HeaderButton icon='/images/notif-mobile.svg' title='notif' notif={true} />
      <Menu onClick={props.changeVisibilityNavBar}>
        <img src='/images/menu.svg' alt='menu' />
      </Menu>
    </Container>
  )
}

export default enhance(HeaderMobile)
