import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 100px;
  border-top: 1px solid #424242;
  background-color: #373737;
  width: 100%;
`

export const Link = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
`

export const Wrapper = styled.div`
  padding-left: 12px;
`

export const Avatar = styled.img`
  width: 41px;
  height: 41px;
  border-radius: 100%;
`

export const Name = styled.p`
  font-size: 16px;
  color: #fff;
  margin: 0;
`

export const Phone = styled.span`
  color: #fff;
  opacity: .4;
  font-size: 12px;
`
