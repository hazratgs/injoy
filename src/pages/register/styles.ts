import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f7f7f7;
  padding: 50px 0;
  min-height: 100vh;

  &:after {
    width: 100vw;
    height: 50%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #2992fa;
    content: '';

    @media (max-width: 768px) {
      height: 334px;
    }
  }

  @media (max-width: 768px) {
    padding: 0;

    &:after {
      height: 334px;
      position: absolute;
    }
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

  @media (max-width: 768px) {
    background-color: #fff;
    margin-top: 0;
    padding: 30px 0;
    width: calc(100% - 30px);
    margin: 0 auto;
  }
`

export const Copyright = styled.p`
  font-size: 10px;
  color: #000;
  opacity: .4;
  text-align: center;  
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
