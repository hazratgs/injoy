import styled from 'styled-components'

export const Container = styled.div`
  padding-bottom: 30px;
`

export const Head = styled.div`
  padding: 25px 30px 5px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding-bottom: 15px;
    padding: 15px 20px 18px 30px;
  }
`

export const Title = styled.h1`
  font-size: 28px;
  margin: 0;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 21px;
  }
`

export const GroupTitle = styled.h2`
  margin: 0;
  padding: 10px 30px 0;
  font-size: 21px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 28px 30px 14px;
  }
`

export const Info = styled.div`
  padding-left: 7px;
  position: relative;
  top: 1px;
  cursor: pointer;

  @media (max-width: 768px) {
    top: 2px;
  }
`

