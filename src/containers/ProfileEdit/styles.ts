import styled from 'styled-components'

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
`

export const Title = styled.h3`

`

export const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 35px 0 0;
`
