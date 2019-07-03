import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const RegisterLink = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;
  color: #999;
  padding: 30px;
  
  a {
    color: #2992fa;
    text-decoration: none;
    margin-left: 3px;

    &:hover {
      opacity: 0.7;
    }
  }
`

export const FormWrapper = styled.div`
  width: 284px;
  margin: 30px auto 0;
`

export const Title = styled.h3`
  font-size: 20px;
  margin: 0;
`

export const Recovery = styled(Link)`
  color: #2992fa;
  text-decoration: none;
  display: block;
  margin-top: 20px;
`