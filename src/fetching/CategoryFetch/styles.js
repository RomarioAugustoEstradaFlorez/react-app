import styled from 'styled-components'
import { loadRotate, loadGradient } from '../../styles/animations'

export const Load = styled.div`
  height: 75px;
  width: 75px;
  margin-bottom: 22px;
  border: solid 2px #e7b0b3;
  border-radius: 50%;
  /* ${loadRotate()} */
  ${loadGradient()}
`