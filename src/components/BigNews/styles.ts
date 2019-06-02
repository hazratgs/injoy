import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface ImageProps {
  src: string
}

export const Container = styled(Link)`
  width: 100%;
  margin-bottom: 20px;
  text-decoration: none;
  background-color: #fff;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  align-items: center;
  padding: 25px;
`

export const Image = styled.div<ImageProps>`
  height: 231px;
  width: 231px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;

  ${props => props.src && `
    background-image: url(${props.src});
  `}
`

export const Content = styled.div`
  padding: 50px 100px 5px 5px;
  flex: 1; 
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Category = styled.span`
  font-size: 12px;
  opacity: .34;
  color: #000;
  position: absolute;
  top: 5px;
  left: 5px;
`

export const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin: 5px 0 0;
`

export const Description = styled.p`
  font-size: 12px;
  color: #000;
  opacity: .4;
`

