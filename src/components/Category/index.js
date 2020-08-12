import React from 'react'
import { TheLink, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path = "#", emoji = '?' }) => (
    <TheLink to={path}>
        <Image src={cover} />
        {emoji}
    </TheLink>
)