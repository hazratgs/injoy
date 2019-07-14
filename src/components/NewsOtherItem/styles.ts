import styled from 'styled-components'
import { Link as LinkElement } from 'react-router-dom'

export const Container = styled.div`
  margin-bottom: 20px;
`

export const Link = styled(LinkElement)`
  text-decoration: none;
`

export const Image = styled.img`
  width: 100%;
  height: 202px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
`

export const Content = styled.div`
  padding: 11px 16px;
`

export const Category = styled.span`
  font-size: 12px;
  color: #000;
  opacity: .34;
`

export const Title = styled.h4`
  font-size: 16px;
  color: #000;
  margin: 6px 0;
  line-height: 20px;
`
