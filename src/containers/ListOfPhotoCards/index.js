import React from 'react'
import { useQuery } from '@apollo/client'
import { ListOfPhotoCards } from '../../components/ListOfPhotoCards'
import { GET_PHOTOS } from '../../hoc/getPhotos'

export const ListOfPhotoCardsContainer = ({ categoryId }) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId }
  })
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return 'Cargando Photo Cards...'
  }
  return <ListOfPhotoCards data={data} />
}
