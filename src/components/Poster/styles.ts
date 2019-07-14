import styled from 'styled-components'

interface IProps {
  src: string
}

export const Container = styled.div<IProps>`
  width: 100%;
  height: 340px;
  background-color: #eee;
  border-radius: 8px;
  margin: 30px 0;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${props => props.src && `
    background-image: url(${props.src});
  `}
`

export const Play = styled.img`
  margin-bottom: 40px;
`

export const Title = styled.h2`
  font-size: 24px;
  color: #fff;
  max-width: 50%;
`

export const Duration = styled.span`
  font-size: 14px;
  color: #fff;
`
