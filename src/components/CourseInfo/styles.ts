import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 8px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    border: 0;
    flex-wrap: wrap;
    padding: 0 30px;
  }
`

export const Item = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 20px;

    &:nth-child(2) {
      order: -1;
    }
  }
`

export const Title = styled.span`
  font-size: 14px;
  margin-bottom: 8px;
  color: rgba(0, 0, 0, .6);
  display: block;
`

