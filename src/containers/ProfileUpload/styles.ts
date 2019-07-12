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

  @media (max-width: 768px) {
    top: 60px;
    padding: 15px;
    height: calc(100vh - 60px);
    align-items: flex-start;
  }
`

export const Content = styled.div`
  width: 458px;
  height: 563px;
  background-color: #fff;
  padding: 0 37px;
  border-radius: 4px;
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 30px;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 30px;
`

export const Close = styled(Link)`
  position: absolute;
  right: 30px;
  top: 30px;
  border: none;
  background-color: transparent;
  z-index: 5;
  text-decoration: none;
  cursor: pointer;

  img {

  }
`

export const DropZone = styled.div`
  width: 384px;
  height: 240px;
  border: 2px dotted #748d99;
  border-radius: 8px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 30px;

  img {
    width: 80px;
  }

  h4 {
    font-size: 16px;
    color: #a2b0b8;
    margin: 15px 0;
  }

  p {
    font-size: 12px;
    line-height: 1.41;
    color: #a2b0b8;
    font-weight: 600;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
  } 
`