import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animations'

export const Nav = styled.nav`
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
`

export const Link = styled(LinkRouter)`
  align-items: center;
  color: #1fb9cc;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;

  &[aria-current] {
    /* color: #000; */

    &:after{
      content: '.';
      position: absolute;
      bottom: 20px;
      font-size: 50px;
      line-height: 10px;
      color: red;
      ${fadeIn({ time: '.6s' })};
    }
  }
`