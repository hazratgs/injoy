import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Avatar = styled(Link)`
  width: 100px;
  height: 100px;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  border-radius: 100%;
  overflow: hidden;
  outline: none;
  position: relative;

  &:after {
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
    display: block;
    top: 0;
    left: 0;
  }

  .avatar {
    width: 100%;
    height: 100%;
  }

  .upload-avatar {
    position: absolute;
    z-index: 10;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
`
