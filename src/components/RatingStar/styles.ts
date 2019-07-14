import styled from 'styled-components'

type props = {
  active: boolean
}

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Item = styled.img<props>`
  filter: grayscale(100%);
  opacity: 0.8;
  width: 18px;
  height: 18px;
  margin-right: 5px;
  
  ${props => props.active && `
    filter: none;
    opacity: 1;
  `}
`
