import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 30px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  margin-bottom: 30px;
`

export const Wrapper = styled.div`
  display: flex;
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
      width: 38px;
      height: 38px;
    }
  }

  span {
    display: block;
    margin-top: 10px;
    font-size: 14px;
  }
`

