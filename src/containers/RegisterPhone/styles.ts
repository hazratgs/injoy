import styled from 'styled-components'

export const Container = styled.div`
  width: 458px;
  height: 369px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.05);
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 540px) {
    width: calc(100% - 30px);
    margin: auto;
    box-shadow: none;
    height: 420px;
    padding: 40px 20px;
    justify-content: flex-start;
    position: static;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  text-align: center;
  margin: 0 0 30px;
  line-height: 24px;
`
