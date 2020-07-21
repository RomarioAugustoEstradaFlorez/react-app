import React from 'react'
import { Category } from '../Category'
import { categories } from '../../../api/db.json'

import { List, Item } from './styles'

export const ListOfCategories = () => {
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