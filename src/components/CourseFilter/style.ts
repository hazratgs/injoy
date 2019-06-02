import styled from 'styled-components'

interface IItemProps {
  active: boolean
}

export const Container = styled.div`
  background-color: #fff;
  width: 300px;
  border-radius: 8px;
`

export const Title = styled.h2`
  padding: 20px;
  font-size: 21px;
  margin: 0;
`

export const Wrapper = styled.div`

`

export const Item = styled.div<IItemProps>`
  height: 42px;
  display: flex;
  align-items: center;
  padding: 0 15px 0 20px;

  ${props => props.active && `
    box-shadow: inset 4px 0 0 0 #2992fa;
    background-color: #f6f6f6;
  `}
`

export const Name = styled.span`
  font-size: 14px;
  cursor: pointer;
  flex: 1;
`

export const RemoveButton = styled.button`
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`