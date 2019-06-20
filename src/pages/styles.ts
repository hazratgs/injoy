import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 80px);
  padding-left: 280px;

  @media (max-width: 768px) {
    padding: 60px 0 0;
    min-height: calc(100vh - 60px);
  }
`

export const Content = styled.div`
  background-color: #f0f0f0;
  flex: 1;
  padding: 30px;

  @media (max-width: 768px) {
    padding: 0;
  }
`
