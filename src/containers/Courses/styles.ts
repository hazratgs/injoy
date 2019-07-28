import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  @media (max-width: 768px) {
    background-color: #fff;
    height: 100%;
  }
`

export const Wrapper = styled.div`
  width: 740px;
  margin-right: 30px;
  background-color: #fff;
  border-radius: 8px;
  padding-bottom: 18px;
  /* padding: 30px; */

  @media (max-width: 768px) {
    margin-right: 0;
    border-radius: 0;
  }
`

export const Aside = styled.div`

`

export const Title = styled.h2`
  margin: 0 0 40px;
  padding: 30px 30px 0;
  font-size: 28px;

  b {
    color: #d2d2d2;
  }

  @media (max-width: 768px) {
    font-size: 21px;
    line-height: 25px;
    margin-bottom: 20px;
  }
`
