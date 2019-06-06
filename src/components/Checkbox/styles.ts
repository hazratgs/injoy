import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px 0;
`

export const Label = styled.label`
  display: flex;
  width: 100%;
  max-width: 284px;
  min-height: 49px;
  border-bottom: 1px solid #f2f2f2;
  align-items: center;
  padding: 10px 0 10px 20px;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    background-color: #edf7ff;
  }

  &:last-child {
    border-bottom: 0;
  }

  input {
    display: none;

    &:checked + div {
      background-color: #2992fa;
      border-color: #2992fa;

      &:after {
        display: block;
      }
    }
  }
`

export const Input = styled.div<{ checked?: boolean }>`
  width: 18px;
  height: 18px;
  border: 2px solid #757575;
  border-radius: 2px;
  transition: all .1s ease;
  position: relative;

  &:after {
    background-image: url('/images/register/checked-check.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 12px;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    transition: all .1s ease;
    display: none;
  }
`

export const Text = styled.span`
  font-size: 14px;
  padding-left: 12px;
  flex: 1;
`
