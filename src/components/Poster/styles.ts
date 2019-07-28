import styled from 'styled-components'

interface IProps {
  src: string
}

export const Container = styled.div<IProps>`
  width: 100%;
  height: 340px;
  background-color: #eee;
  border-radius: 8px;
  margin: 30px 0;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  ${props => props.src && `
    background-image: url(${props.src});
  `}

  &::after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: '';
    display: none;
    z-index: 2;
    background-color: #000;
    opacity: .3;
  }

  @media (max-width: 768px) {
    border-radius: 0;
    justify-content: space-between;
    padding: 20px 30px;
    height: 240px;
    margin: 0 0 10px;

    &::after {
      display: block;
    }
  }
`

export const Play = styled.img`
  margin-bottom: 40px;
  position: relative;
  z-index: 5;

  @media (max-width: 768px) {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
`

export const Title = styled.h2`
  font-size: 24px;
  color: #fff;
  max-width: 50%;
  position: relative;
  z-index: 5;

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0;
    font-size: 21px;
  }
`

export const Duration = styled.span`
  font-size: 14px;
  color: #fff;
  position: relative;
  z-index: 5;
`
