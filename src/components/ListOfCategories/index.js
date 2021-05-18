import React from 'react'
import { Category } from '../Category'
import { List, Item } from './ListOfCategories.styled'
import { categories as mockCategories } from '../../../api/db.json'

export const ListOfCategories = () => {
  return (
    <List>
      {mockCategories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )
}
