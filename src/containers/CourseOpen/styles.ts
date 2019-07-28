import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Wrapper = styled.div`
  width: 740px;
  background-color: #fff;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: none;
  }
`

export const Content = styled.div`
  padding: 10px 30px;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`

export const FlexRevert = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

export const Aside = styled.div`
  width: 300px;
  margin-left: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`
