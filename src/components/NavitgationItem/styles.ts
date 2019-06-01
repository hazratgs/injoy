import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Link = styled(NavLink)`
  padding: 0 20px;
  height: 58px;
  display: flex;
  align-items: center;
  text-decoration: none;

  &.active {
    background-color: #2c2c2c;
    box-shadow: inset -4px 0 0 0 #2992fa;
  }
`

export const Icon = styled.img`

`

export const Title = styled.span`
  font-size: 16px;
  color: #fff;
  flex: 1;
  padding-left: 18px;
`

export const Counter = styled.span`
  font-size: 16px;
  opacity: .3;
  color: #fff;
`
