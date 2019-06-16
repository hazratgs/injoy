import styled from 'styled-components'

export const Container = styled.div`
  display: none;
  height: 60px;
  padding: 0 20px 0 30px;
  background-color: #373737;

  @media (max-width: 769px) {
    display: flex;
  }
`

export const Menu = styled.button`
  background-color: transparent;
  border: none;
  padding: 0 10px 0 20px;
`
