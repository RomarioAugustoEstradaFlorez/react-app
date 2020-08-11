import React from 'react'
import { Load, Circle } from './styles'

export const PhotoCardFetch = ({ path, emoji = '?' }) => (
  <Load>
    <Circle></Circle>
    <Circle></Circle>
    <Circle></Circle>
  </Load>
)