import styled from 'styled-components'

export const Container = styled.div`
  width: 458px;
  height: 504px;
  border-radius: 4px;
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  background-color: #fff;

  @media (max-width: 768px) {
    position: static;
    width: calc(100% - 30px);
    margin: auto;
    height: 410px;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 32px;
`
