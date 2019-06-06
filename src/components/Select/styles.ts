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
  border-radius: 100%;

  transform: translate(0px, -23px);
  font-size: 12px;
  z-index: 10;
  /* color: #2992fa; */
`

export const SelectElement = styled.select<IInputStyleProps>`
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
  transition: all .3s ease;
  resize: none;
  -webkit-appearance: none; 
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;

  &:after {
     
  }
`

export const Arrow = styled.div`
  width: 12px;
  height: 12px;
  background-image: url('/images/register/select-arrow.svg');
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 20px;
  margin: auto;
  z-index: 5;
`
