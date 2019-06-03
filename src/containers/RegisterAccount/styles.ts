import styled from 'styled-components'

export const Container = styled.div`
  width: 458px;
  height: 500px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.05);
  position: relative;

  @media (max-width: 768px) {
    width: calc(100% - 30px);
    margin: 0 auto;
    border-radius: 8px 8px 0 0;
    justify-content: flex-start;
    padding: 40px 0;
    height: auto;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  text-align: center;
  margin: 0 0 38px;
`

export const Error = styled.div`
  font-size: 12px;
  color: #fff;
  height: 35px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #ed4b34;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px 4px 0 0;
`
