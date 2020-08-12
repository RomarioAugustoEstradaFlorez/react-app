import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg { /*this with the & say that all of svg in the father, that is a button will have that properties */
    margin-right: 4px;
  }
`