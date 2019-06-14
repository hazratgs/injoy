import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Element = styled(Link)`
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
  color: #c4c4c4;

  &:disabled {
    box-shadow: none;
    background-color: #c4c4c4;
    cursor: default;
  }
`
