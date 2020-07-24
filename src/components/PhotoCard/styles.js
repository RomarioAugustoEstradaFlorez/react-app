import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const Article = styled.article`
  min-height: 200px; /* to put the others articles in the viewport with this */
`

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0; /*This make the 16:9 in the image*/
  position: relative;
  width: 100%; 
`

export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg { /*this with the & say that all of svg in the father, that is a button will have that properties */
    margin-right: 4px;
  }
`