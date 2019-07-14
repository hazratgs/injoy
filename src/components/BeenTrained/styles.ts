import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Item = styled(Link)`
  margin-right: 4px;

  img {
    width: 24px;
    height: 24px;
    border-radius: 100%;
    background-color: #eee;
    display: block;
  }
`

export const Counter = styled.span`
  margin-left: 4px;
  font-size: 12px;
`
