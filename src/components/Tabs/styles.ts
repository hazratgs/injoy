import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 30px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    padding: 0;
    border-bottom: none;
    margin-bottom: 18px;
  }
`

export const Item = styled(NavLink)`
  padding: 10px 0;
  margin-right: 40px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: #000;

  &.active {
    color: #2992fa;
    box-shadow: 0 2px 0 0 #2992fa;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    flex: 1;
    text-align: center;

    &.active {
      box-shadow: 0 4px 0 0 #2992fa;
    }
  }
`
