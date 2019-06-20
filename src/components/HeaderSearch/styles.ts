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

  @media (max-width: 768px) {
    padding: 0 20px;
    height: auto;
    box-sizing: border-box;
  }
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    border: solid 1px rgba(0,0,0, 0.3);
  }

  &:focus {
    border: solid 1px #2992fa;
  }

  @media (max-width: 768px) {
    border-radius: 116px;
    border-color: rgba(255, 255, 255, 0.1);
    background-color: #313131;
    box-sizing: border-box;
    font-size: 13px;
    padding: 0 25px;
    color: #fff;
  }
`

export const Icon = styled.img`
  position: absolute;
  left: 47px;
  top: 0;
  bottom: 0;
  margin: auto;

  @media (max-width: 768px) {
    display: none;
  }
`
