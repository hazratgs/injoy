import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Link = styled(NavLink)`
  padding: 0 20px;
  height: 58px;
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;

  &.active {
    background-color: #2c2c2c;
    box-shadow: inset -4px 0 0 0 #2992fa;
  }

  &::after {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    margin: auto;
    width: calc(100% - 80px);
    margin: auto;
    background-color: #313131;
    height: 1px;
    content: '';
    display: none;
  }

  @media (max-width: 768px) {
    padding: 0 40px;

    &::after {
      display: block;
    }
  } 
`

export const Icon = styled.img`

`

export const Title = styled.span`
  font-size: 16px;
  color: #fff;
  flex: 1;
  padding-left: 18px;

  @media (max-width: 768px) {
    padding-left: 20px;
  }
`

export const Counter = styled.span`
  font-size: 16px;
  opacity: .3;
  color: #fff;
`
