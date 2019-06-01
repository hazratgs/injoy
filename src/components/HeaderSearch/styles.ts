import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 740px;
  width: 100%;
  position: relative;
  box-sizing: content-box;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: solid 1px rgba(0,0,0, 0.1);
  padding: 0 20px 0 46px;
  font-size: 14px;
  outline: none;
  transition: all .3s ease;

  &:hover {
    border: solid 1px rgba(0,0,0, 0.3);
  }

  &:focus {
    border: solid 1px #2992fa;
  }
`

export const Icon = styled.img`
  position: absolute;
  left: 47px;
  top: 0;
  bottom: 0;
  margin: auto;
`
