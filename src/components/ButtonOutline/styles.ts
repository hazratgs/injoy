import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface Props {
  adaptive?: boolean
}

export const Element = styled(Link)<Props>`
  border-radius: 30px;
  background-color: transparent;
  height: 40px;
  width: 174px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  transition: all .3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 2px solid #2992fa;
  color: #2992fa;

  &:hover {
    box-shadow: 0 4px 4px 0 rgba(89, 185, 254, 0.2);
    background-color: #2992fa;
    color: #fff;
  }

  &:active {
    box-shadow: none;
    background-color: #2992fa;
  }

  &:disabled {
    box-shadow: none;
    background-color: #c4c4c4;
    cursor: default;
  }

  @media (max-width: 768px) {
    ${props => props.adaptive && `
      border: none;
      border-radius: none;
      height: 40px;
      width: 40px;

      &:hover {
        background-color: rgba(41, 146, 250, 0.21);
      }

      span {
        display: none;
      }
    `}
  }
`
