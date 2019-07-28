import styled from 'styled-components'

interface Props {
  active?: boolean
}

export const Container = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
`

export const Title = styled.h2`
  margin: 0;
  font-size: 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const GroupTitle = styled.h3<Props>`
  font-size: 18px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  ${props => props.active && `
    color: #2992fa;
  `}
`

export const GroupWrapper = styled.div`
  padding: 15px 0 15px 20px;
  position: relative;

  &::after {
    position: absolute;
    left: 4px;
    top: 20px;
    width: 1px;
    height: calc(100% - 40px);
    min-height: 16px;
    content: '';
    background-color: #2992fa;
    z-index: 4;
  }
`

export const Item = styled.div<Props>`
  margin-bottom: 16px;
  position: relative;
  padding-left: 5px;

  &:last-child {
    margin-bottom: 0;
  }

  &::after {
    position: absolute;
    left: -20px;
    top: 5px;
    width: 8px;
    height: 8px;
    content: '';
    background-color: #fff;
    border: 1px solid #2992fa;
    border-radius: 100%;
    z-index: 5;
  }

  span {
    font-size: 14px;
    opacity: .6;
  }

  ${props => props.active && ` 
    span {
      color: #000;
      font-weight: 500;
      opacity: 1;
    }
  
    &::after {
      background-color: #2992fa;
    }
  `}
`
