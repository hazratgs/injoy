import styled from 'styled-components'

export const Container = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Title = styled.h2`
  margin: 0 0 20px;
`
