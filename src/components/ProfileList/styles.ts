import styled from 'styled-components'

export const Container = styled.div`
  padding: 18px 30px;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  margin-bottom: 30px;

  @media (max-width: 768px) {
    padding: 0 30px;
    margin-bottom: 0;
  }
`

export const ViewButton = styled.button`
  border-radius: 30px;
  font-size: 12px;
  background-color: #f1f1f1;
  border: none;
  padding: 5px 20px;
  margin: auto;
  left: 0;
  right: 0;
  bottom: -30px;
  position: relative;
  display: block;
  outline: none;
  cursor: pointer;

  @media (max-width: 768px) {
    bottom: -13px;
  }
`
