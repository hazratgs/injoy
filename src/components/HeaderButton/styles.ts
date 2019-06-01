import styled from 'styled-components'

interface ContainerProps {
  border: boolean
}

interface ButtonProps {
  notif: boolean
}

export const Container = styled.div<ContainerProps>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;

  ${props => props.border && `
    border-left: 1px solid #eee;
    padding-left: 30px;
  `}
`

export const Button = styled.button<ButtonProps>`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #eaf5ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  outline: none;
  cursor: pointer;
  transition: all .3s ease;
  position: relative;

  &:hover {
    background-color: #d7ecff;
  }

  &:after {
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: #ed4b34;
    position: absolute;
    right: 2px;
    top: 2px;
    content: '';
    display: none;

    ${props => props.notif && `
      display: block;
    `}
  }
`

export const Icon = styled.img`

`
