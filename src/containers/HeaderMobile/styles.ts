import styled from 'styled-components'

export const Container = styled.div`
  display: none;
  height: 60px;
  width: 100vw;
  padding: 0 20px 0 30px;
  background-color: #373737;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  @media (max-width: 769px) {
    display: flex;

    .navbar-logo {
      flex: 1;
    }
  }
`

export const Menu = styled.button`
  background-color: transparent;
  border: none;
  padding: 0 10px 0 20px;
  outline: none;
`
