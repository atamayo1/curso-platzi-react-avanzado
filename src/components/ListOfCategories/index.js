import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './ListOfCategories.styled'
// import { categories as mockCategories } from '../../../api/db.json'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    window
      .fetch(
        'https://curso-platzi-react-avanzado-83amsx1hz-atamayo1.vercel.app/categories'
      )
      .then((res) => res.json())
      .then((response) => {
        setCategories(response)
      })
  }, [])

  return (
    <List>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )
}
