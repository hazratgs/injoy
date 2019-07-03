import styled from 'styled-components'

export const Container = styled.div`
  width: 916px;
  /* height: 589px; */
  display: flex;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    width: 100%;
    display: block;
    background-color: transparent;
    box-shadow: none;
    height: auto;
    margin-top: -132px;
  }
`

export const VideoWraper = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 15px 15px 0;
  }
`

export const VideoImages = styled.div`
  width: 458px;
  height: 368px;
  background-image: url('/images/register/bg-start.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 217px;
    border-radius: 8px 8px 0 0;
  }
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

  @media (max-width: 768px) {
    padding: 20px 0 20px 30px;
    height: auto;
  }
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

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const Content = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  align-content: center;
  /* justify-content: center; */
  text-align: center;
  position: relative;
  padding-top: 90px;

  @media (max-width: 768px) {
    background-color: #fff;
    margin: 0 15px;
    padding: 30px 0;
    justify-content: center;
  }
`

export const Description = styled.p`
  font-size: 14px;
`

export const Buttons = styled.div`
  padding-top: 50px;

`

export const Button = styled.a`
  cursor: pointer;
`
