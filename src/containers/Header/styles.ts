import styled from 'styled-components'

export const Container = styled.div`
  height: 80px;
  display: flex;
  background-color: #fff;
  padding-left: 280px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Wrapper = styled.div`
  width: 1440px;
  height: 100%;
  display: flex;
`

export const Content = styled.div`
  flex: 1;
  display: flex;
`

export const Buttons = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 60px;
`
