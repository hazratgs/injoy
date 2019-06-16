import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 8px 0;
    padding: 0;
    flex: 1;
    font-size: 16px;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    img {
      width: 10px;
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
