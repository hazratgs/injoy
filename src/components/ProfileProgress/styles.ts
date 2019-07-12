import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 30px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  margin-bottom: 30px;

  @media (max-width: 768px) {
    border-bottom: 0;
    margin-bottom: 0;
  }
`

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

export const Item = styled.div`
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 10px;
  text-align: center;

  .img {
    width: 67px;
    height: 67px;
    background-color: #ddecfe;
    border-radius: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;

    img {
      width: 58px;
      height: 58px;
    }
  }

  span {
    display: block;
    margin-top: 10px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    width: 78px;
    box-sizing: content-box;
    padding: 0 15px 0 0;

    .img {
      width: 50px;
      height: 50px;

      img {
        height: 44px;
        width: 44px;
      }
    }

    span {
      font-size: 10px;
      margin-top: 5px;
    }
  }
`

