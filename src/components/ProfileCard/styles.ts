import styled from 'styled-components'

export const Container = styled.div`
  border: solid 1px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  /* padding: 13px; */
  display: flex;
  /* align-items: center; */
  margin: 30px;

  @media (max-width: 768px) {
    border-radius: 0;
    margin: 0;
    border: 0;
    flex-wrap: wrap;
    padding: 0 30px 15px;
    border-bottom: 1px solid #e6e6e6;
  }
`

export const Image = styled.div`
  margin: 13px 28px 13px 13px;
  position: relative;

  img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }
  
  @media (max-width: 768px) {
    margin: 0;
    margin-right: 20px;
    display: flex;
    align-items: center;
    
    img {
      width: 80px;
      height: 80px;
    }
  }
`

export const Circle = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  border: 2px solid #fff;
  border-radius: 100%;
  z-index: 5;
  background-color: #02bd82;

  @media (max-width: 768px) {
    bottom: 0px;
    right: 4px;
    width: 17px;
    height: 17px;
  }
`

export const UserName = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;

  h2 {
    font-size: 24px;
    font-weight: 500;
    margin: 4px 0;
  }

  span {
    font-size: 16px;
    color: #c4c4c4;

    b {
      color: #2992fa;
      font-weight: 500;
    }
  }

  @media (max-width: 768px) {
    flex: calc(100% - 160px);
    margin: 10px 0 14px;

    h2 {
      font-size: 18px;
    }

    span {
      font-size: 14px;
    }
  }
`

export const UserContact = styled.div`
  border-left: 1px solid #e6e6e6;
  padding-left: 34px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 45px 0 30px;

  @media (max-width: 768px) {
    flex: 1;
    border: none;
    padding: 25px 30px 10px 0;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export const UserContactItem = styled.p`
  display: flex;
  align-items: center;
  margin: 7px 0;

  img {

  }

  span {
    padding-left: 15px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    img {
      width: 16px;
      height: 16px;
    }

    span {
      font-size: 14px;
    }
  }
`
