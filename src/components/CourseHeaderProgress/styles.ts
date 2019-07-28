import styled from 'styled-components'

interface Props {
  value: number
}

export const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

export const Line = styled.div<Props>`
  width: ${props => props.value && `${props.value}%`};
  height: 4px;
  background-color: #02bd82;
`
