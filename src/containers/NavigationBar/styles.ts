import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background-color: red;
  width: 280px;
  background-color: #373737;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;

  .header-search {
    display: none;
  }

  @media (max-width: 768px) {
    position: fixed;
    width: 85vw;
    height: calc(100% - 60px);
    top: 60px;
    right: 0;
    left: auto;
    background-color: #3d3d3d;
    padding: 20px 0;

    .navbar-logo {
      display: none;
    }

    .header-search {
      display: flex;
    }
  }
`

export const Wrapper = styled.div`
  padding-top: 30px;

  @media (max-width: 768px) {
    padding: 0;
  }
`
