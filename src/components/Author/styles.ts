import styled from 'styled-components'
import { IProps } from './'

export const Container = styled.div<IProps>`
  display: flex;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
    border-radius: 100%;
    background-color: #eee;
    margin-right: 8px;
  }

  span {
    font-size: 12px;
  }

  @media (max-width: 768px) {

    ${props => props.mobileWhite && `
      img {
        width: 16px;
        height: 16px;
      }
    
      span {
        color: #fff;
        font-size: 9px;
      }
    `}

    ${props => props.big && `
      span {
        color: #000;
        font-size: 14px;
        font-weight: 500;
      }
    `}
  }
`
