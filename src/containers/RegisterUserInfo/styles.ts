import styled from 'styled-components'

export const Wrapper = styled.div`
  /* width: 750px; */
`

export const Container = styled.div`
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
    height: auto;
    padding: 20px 0;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 32px;
`

export const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 78px;

  @media (max-width: 768px) {
    padding: 0;
    justify-content: center;
  }
`

export const Group = styled.div`
  &:first-child {
    padding-right: 15px;
  }

  &:last-child {
    padding-left: 15px;
  }

  @media (max-width: 768px) {
    padding: 0!important;
  }
`