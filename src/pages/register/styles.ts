import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f7f7f7;
  padding: 50px 0;
  min-height: 100vh;

  &:after {
    width: 100vw;
    height: 50%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #2992fa;
    content: '';
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 5;
`

export const Logo = styled.img`
  margin-bottom: 60px;
`

export const Footer = styled.div`
  margin-top: 50px;
`

export const Copyright = styled.p`
  font-size: 10px;
  color: #000;
  opacity: .4;
`

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`

export const SocialItem = styled.a`
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
`
