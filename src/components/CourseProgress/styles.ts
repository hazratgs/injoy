import styled from 'styled-components'

type ProgressValue = { value: number }

export const Container = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 10px;
  width: 100%;

`

export const Title = styled.h4`
  font-size: 14px;
  font-weight: normal;
  margin: 0;
`

export const Progress = styled.div<ProgressValue>`
  height: 4px;
  width: 100%;
  margin: 15px 0 8px;
  background-color: #c4c4c4;
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  &::after {
    width: 50px;
    height: 4px;
    background-color: #02bd82;
    content: '';
    display: block;

    ${props => props.value && `
      width: ${props.value}%;
    `}
  }
`

export const PercentWrappeer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  opacity: .3;
`
