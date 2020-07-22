import React, { useEffect, useState } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

export const ListOfCategories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        window.fetch('https://api-pet.vercel.app/categories')
            .then(res => res.json())
            .then(response => {
                setCategories(response);
            })
    }, []) // add array empty to stop the multiple pettitions

    return (
        <List>
            {
                categories.map(category =>
                    <Item key={category.id}>
                        {/* <Category cover={category.cover} path={category.path} emoji={category.emoji} /> */}
                        <Category {...category} /> {/* rest operator are the three points ...*/}
                    </Item>)
            }
        </List>
    )
}