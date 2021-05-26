import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery } from '@apollo/client'
import { GET_PHOTOS } from '../../hoc/getPhotos'
// import { ReactLoading } from 'react-loading'
// import { ContentSpinner } from './ListOfPhotoCards.styled'
// import { photos } from '../../../api/db.json'

export const ListOfPhotoCards = ({ categoryId }) => {
  // console.log('categoryId prop', categoryId)
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId }
  })
  // console.log('data photos', data)
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return 'Cargando Photo Cards...'
  }
  return (
    <div>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </div>
  )
}
