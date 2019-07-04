import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`

export const Popup = styled.div`
  background-color: #fff;
  border-radius: 8px;
  max-width: 720px;
  padding: 30px 30px 40px;
  text-align: center;
`

export const Title = styled.h2`
  font-size: 20px;
  line-height: 28px;
`

export const Description = styled.div`
  padding: 10px 0 20px;

  p {
    font-size: 16px;
    line-height: 24px;
  }
`

export const Button = styled.button`
  padding: 10px 30px;
  border-radius: 6px;
  font-size: 16px;
  text-transform: uppercase;
  border: none;
  color: #fff;
  background-color: #53b789;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    opacity: .8;
  }
`
