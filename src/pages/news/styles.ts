import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
`

export const Wrappper = styled.div`
  width: 740px;
  margin-right: 30px;
  background-color: #fff;
  border-radius: 8px;
`

export const Head = styled.div`
  padding: 30px 30px 15px;
  display: flex;
`

export const HeadWrapper = styled.div`
  padding-left: 10px;
`

export const Title = styled.h1`
  font-size: 28px;
  margin: 0;
`

export const BackButton = styled(Link)`
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
`

export const NewsParams = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
`

export const DateTime = styled.p`
  font-size: 12px;
  color: #adadad;
  margin: 0 5px 0 0;
`

export const Author = styled.a`
  color: #2992fa;
  border-bottom: 1px solid #2992fa;
  font-size: 12px;
  cursor: pointer;
`

export const View = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  color: #adadad;
`

export const Image = styled.img`
  width: 740px;
  height: 400px;
  object-fit: cover;
  object-position: center;
`

export const HtmlContent = styled.div`
  padding: 10px 30px;

  p {
    font-size: 14px;
    line-height: 1.5;
  }
`
