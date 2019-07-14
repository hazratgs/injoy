import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  border: solid 1px rgba(0, 0, 0, .1);
  border-radius: 8px;
  display: flex;
  overflow: hidden;
`

export const Image = styled.img`
  display: block;
  width: 171px;
  height: 100%;
`

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
`

export const Title = styled(Link)`
  font-size: 21px;
  line-height: 28px;
  color: #000;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
`

export const Description = styled.p`
  font-size: 12px;
  line-height: 18px;
  margin: 8px 0;
`

export const TagsWrapper = styled.div`
  display: flex;
  padding: 13px 0 26px;
`

export const Tag = styled.div`
  margin-right: 6px;
  border: 1px solid #2992fa;
  border-radius: 30px;
  height: 28px;
  line-height: 28px;
  padding: 0 15px;
  color: #2992fa;
  font-size: 12px;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
`

export const Duration = styled.div`
  display: flex;
  align-items: center;
  margin-right: 35px;

  img {
    margin-right: 8px;
  }

  span {
    font-size: 12px;
  }
`

export const Rating = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 8px;
  }

  span {
    font-size: 12px;
  }
`
