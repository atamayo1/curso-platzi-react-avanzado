import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './ListOfCategories.styled'
// import { categories as mockCategories } from '../../../api/db.json'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window
      .fetch(
        'https://curso-platzi-react-avanzado-83amsx1hz-atamayo1.vercel.app/categories'
      )
      .then((res) => res.json())
      .then((response) => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  })

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
      loading ? <Item key='loading'><Category /></Item> : categories.map((category) => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )

  if (loading) {
    return 'Cargando Categories...'
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
