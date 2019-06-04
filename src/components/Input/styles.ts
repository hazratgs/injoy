import styled from 'styled-components'

interface IInputProps {
  full: boolean,
  error: boolean,
  checked: boolean
}

export const Container = styled.div`
  position: relative;
  background-color: #fff;
  margin-bottom: 28px;
`

export const Placeholder = styled.span`
  position: absolute;
  font-size: 14px;
  height: auto;
  color: #c4c4c4;
  display: block;
  height: 17px;
  top: 0;
  bottom: 0;
  left: 15px;
  margin: auto;
  z-index: 5;
  transition: all .3s ease;
  background-color: #fff;
  padding: 0 10px;
  border-radius: 100%;
`

export const InputElement = styled.input<IInputProps>`
  width: 100%;
  height: 50px;
  width: 284px;
  border-radius: 4px;
  border: solid 1px #e5e5e5;
  padding: 0 25px;
  font-size: 14px;
  color: #000;
  outline: none;
  background-color: transparent;
  z-index: 7;
  position: relative;

  &:focus + span {
    transform: translate(0px, -23px);
    font-size: 12px;
    z-index: 10;
  }

  ${props => props.full && `
    & + span {
      transform: translate(0px, -23px);
      font-size: 12px;
      z-index: 10;
    }
  `}

  ${props => props.checked && `
    border-color: #02bd82;

    & + span {
      color: #02bd82;
    }
  `}

  ${props => props.error && `
    border-color: #ed4b34;

    & + span {
      color: #ed4b34;
    }
  `}
`

export const Error = styled.div`
  display: block;
  position: absolute;
  right: 20px;
  top: 0;
  bottom: 0;
  margin: auto;
  background-image: url('/register/error-input.svg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 14px;
  height: 14px;
`

export const Checked = styled.div`
  display: block;
  position: absolute;
  right: 20px;
  top: 0;
  bottom: 0;
  margin: auto;
  background-image: url('/images/register/checked-input.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 14px;
  height: 14px;
`
