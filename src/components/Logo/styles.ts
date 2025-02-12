import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LogoContainer = styled(Link)`
  background-color: #454545;
  width: 280px;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 20.5px;
  text-decoration: none;

  @media (max-width: 768px) {
    height: 60px;
    background-color: transparent;
    padding: 0;

    img {
      height: 35px;
    }
  }
`
