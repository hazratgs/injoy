import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 8px;
  border: solid 1px rgba(0, 0, 0, 0.1);
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;

  @media (max-width: 768px) {
    border: none;
    padding: 0 30px;
    flex-wrap: wrap;
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
    width: 20px;
  }

  span {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    width: 50%;
    margin-bottom: 15px;
  }
`
