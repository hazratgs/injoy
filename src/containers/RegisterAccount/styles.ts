import styled from 'styled-components'

export const Container = styled.div`
  width: 458px;
  padding: 85px 0;
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
    position: static;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  text-align: center;
  margin: 0 0 38px;
`
