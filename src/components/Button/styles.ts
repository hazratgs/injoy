import styled from 'styled-components'

export const Element = styled.button`
  border-radius: 30px;
  background-color: #2992fa;
  height: 40px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  outline: none;
  padding: 0 38px;
  transition: all .3s ease;

  &:hover {
    box-shadow: 0 4px 4px 0 rgba(89, 185, 254, 0.2);
    background-color: #59b9fe;
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
`
