import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  border: solid 1px rgba(0, 0, 0, .1);
  border-radius: 8px;
  display: flex;
  overflow: hidden;
  margin-bottom: 12px;

  &::after {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 4;
    top: 0;
    left: 0;
    content: '';
    display: none;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  }

  @media (max-width: 768px) {
    border: 0;
    position: relative;
    min-height: 230px;

    &::after {
      display: block;
    }
  }
`

export const Image = styled.img`
  display: block;
  width: 171px;
  height: 100%;
  position: relative;
  z-index: 3;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
`

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  position: relative;
  z-index: 5;

  @media (max-width: 768px) {
    padding: 15px 20px;
    /* align-items: flex-end; */
    /* flex-direction: column; */
    justify-content: flex-end;
  }
`

export const Title = styled(Link)`
  font-size: 21px;
  line-height: 28px;
  color: #000;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 768px) {
    color: #fff;
    font-size: 18px;
    line-height: 24px;
    margin: 0;
  }
`

export const Description = styled.p`
  font-size: 12px;
  line-height: 18px;
  margin: 8px 0;

  @media (max-width: 768px) {
    font-size: 10px;
    color: #fff;
    margin: 5px 0 15px;
  }
`

export const TagsWrapper = styled.div`
  display: flex;
  padding: 13px 0 26px;

  @media (max-width: 768px) {
    position: absolute;
    top: 0px;
    left: 20px;
  }
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

  @media (max-width: 768px) {
    background-color: #2992fa;
    color: #fff;
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
`

export const Duration = styled.div`
  display: flex;
  align-items: center;
  margin: 0 35px;

  img {
    margin-right: 8px;
  }

  span {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    img {
      width: 16px;
      height: 16px;
    }
  
    span {
      color: #fff;
      font-size: 9px;
    }
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

  @media (max-width: 768px) {
    img {
      width: 16px;
      height: 16px;
    }
  
    span {
      color: #fff;
      font-size: 9px;
    }
  }
`
