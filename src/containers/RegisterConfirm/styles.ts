import styled from 'styled-components'

export const Container = styled.div`
  width: 458px;
  height: 320px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  @media (max-width: 768px) {
    position: static;
    width: calc(100% - 30px);
    margin: auto;
    height: 280px;
  }
`

export const Description = styled.p`
  font-size: 12px;
  color: #000;
  opacity: .34;
  padding: 0;
  margin: -10px auto 20px;
`
