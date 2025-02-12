import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
  align-items: center;

  img {

  }

  p {
    margin: 8px 0;
    padding: 0 10px;
    flex: 1;
    font-size: 16px;
    font-weight: 500;
  }

  span {
    font-size: 14px;
    color: #c4c4c4;
  }

  @media (max-width: 768px) {
    img {
      width: 8px;
    }

    p {
      font-size: 14px;
      font-weight: normal;
    }

    span {
      font-size: 12px;
    }
  }
`
