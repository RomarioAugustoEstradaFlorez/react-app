import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'
import { Link as LinkRoutersss } from '@reach/router'

export const TheLink = styled(LinkRoutersss)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  text-align: center;
  width: 75px;
  ${fadeIn('0.3s', 'ease-in')}
`

export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;

`