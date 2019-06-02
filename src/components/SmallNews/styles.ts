import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface ImageProps {
  src: string
}

export const Container = styled(Link)`
  width: 229px;
  margin-bottom: 20px;
  text-decoration: none;
  background-color: #fff;
  display: block;
  border-radius: 8px;
  overflow: hidden;
`

export const Image = styled.div<ImageProps>`
  height: 202px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${props => props.src && `
    background-image: url(${props.src});
  `}
`

export const Content = styled.div`
  padding: 12px 16px 19px; 
`

export const Category = styled.span`
  font-size: 12px;
  opacity: .34;
  color: #000;
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin: 5px 0 0;
`
