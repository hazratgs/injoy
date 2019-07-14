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

  @media (max-width: 768px) {
    width: calc(50% - 5px);
    margin-bottom: 10px;
  }
`

export const Image = styled.div<ImageProps>`
  height: 202px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${props => props.src && `
    background-image: url(${props.src});
  `}

  @media (max-width: 768px) {
    height: 120px;
  }
`

export const Content = styled.div`
  padding: 12px 16px 19px; 

  @media (max-width: 768px) {
    padding: 8px 12px 12px; 
  }
`

export const Category = styled.span`
  font-size: 12px;
  opacity: .34;
  color: #000;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin: 5px 0 0;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }
`
