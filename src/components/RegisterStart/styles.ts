import styled from 'styled-components'

export const Container = styled.div`
  width: 916px;
  height: 589px;
  display: flex;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.05);
`

export const VideoWraper = styled.div`
  flex: 1;
`

export const VideoImages = styled.div`
  width: 458px;
  height: 368px;
  background-image: url('/register/bg-start.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Player = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid #fff;
  box-sizing: content-box;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 24px;
    height: 24px;
    position: relative;
    left: 2px;
  }
`

export const VideoDescription = styled.div`
  background-color: #2992fa;
  height: 221px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
`

export const VideoLogo = styled.img`

`

export const VideoDescriptionText = styled.p`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  margin: 0;
  padding: 0 0 0 20px;
  display: inline-block;

  strong {
    color: #fcd846;
  }
`

export const Content = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
`

export const Title = styled.h3`
  font-size: 20px;
  margin: 0;
`

export const Description = styled.p`
  font-size: 14px;
`

export const Buttons = styled.div`

`

export const Button = styled.a`
  cursor: pointer;
`
