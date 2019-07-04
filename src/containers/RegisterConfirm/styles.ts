import styled from 'styled-components'

export const Title = styled.p`
  font-size: 13px;
  margin-bottom: 40px;
  text-align: center;
  line-height: 20px;
`

export const Wrapper = styled.div`
  width: 458px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Container = styled.div`
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
