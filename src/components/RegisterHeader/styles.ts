import styled from 'styled-components'
import { Link } from 'react-router-dom'

type Step = {
  active: boolean
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 20px;
  position: relative;
  padding: 0 20px 20px;
`

export const Button = styled(Link)`
  width: 42px;
  height: 42px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 100%;
  position: relative;
  transition: all .3s ease;
  position: absolute;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  img {
    width: 18px;
    height: 18px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
`

export const Step = styled.div`
  height: 42px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StepItem = styled.div<Step>`
  width: 40px;
  height: 4px;
  background-color: #fff;
  opacity: 0.1;
  margin-right: 10px;
  border-radius: 3px;

  &:last-child {
    margin-right: 0;
  }

  ${props => props.active && `
    opacity: 1;
  `}
`
