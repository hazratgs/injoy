import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  padding: 30px 30px 15px;
  display: flex;

  @media (max-width: 768px) {
    display: block;
    padding: 20px 23px;
  }
`

export const Wrapper = styled.div`
  padding-left: 10px;

  @media (max-width: 768px) {
    padding: 0;
  }
`

export const Title = styled.h1`
  font-size: 28px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 21px;
  }
`

export const Button = styled(Link)`
  width: 32px;
  height: 32px;
  background: transparent;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 768px) {
    background-color: #f6f6f6;
    width: 43px;
    height: 43px;
    border-radius: 100%;
    margin-bottom: 15px;
  }
`
