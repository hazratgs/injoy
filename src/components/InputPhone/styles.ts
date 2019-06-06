import styled from 'styled-components'
import { IInputStyleProps } from '../../types/inputs'

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
  border-radius: 10px;
`

export const InputElement = styled.div<IInputStyleProps>`
   position: relative;
   border-radius: 4px;
   border: solid 1px #e5e5e5;
  
  .react-phone-number-input__row {

    .react-phone-number-input__country {
      width: 50px;
      height: 50px;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      margin: auto 0;
      padding: relative;
      z-index: 10;
    }

    .react-phone-number-input__icon {
      padding: relative;
      z-index: 10;
      width: 24px;
      height: 24px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      margin: auto;
      border-radius: 100%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .react-phone-number-input__country-select {
      width: 50px;
      height: 50px;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      z-index: 10;
      opacity: 0;
      border: 0;
      background: transparent;
      outline: none;
      cursor: pointer;
    }

    .react-phone-number-input__input {
      width: 100%;
      height: 50px;
      width: 284px;
      padding: 0 25px 0 50px;
      font-size: 14px;
      color: #000;
      outline: none;
      background-color: transparent;
      z-index: 7;
      position: relative;
      border: 0;
      cursor: text;
    }
  }

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
    border-color: #ed4b34!important;

    & + span {
      color: #ed4b34!important;
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
  background-image: url('/images/register/error-input.svg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 14px;
  height: 14px;
  z-index: 15;
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
  z-index: 15;
`
