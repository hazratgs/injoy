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
