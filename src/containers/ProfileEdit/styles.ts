import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;

  @media (max-width: 768px) {
    top: 60px;
    padding: 15px;
    height: calc(100vh - 60px);
    align-items: flex-start;
  }
`

export const Content = styled.div`
  width: 772px;
  background-color: #fff;
  padding: 82px 87px 60px;
  border-radius: 4px;
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    padding: 30px;
  } 
`

export const Title = styled.h3`

`

export const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 35px 0 0;
`

export const Close = styled(Link)`
  width: 40px;
  height: 40px;
  background-image: url('/images/profile/close-edit.svg');
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 5;
`
