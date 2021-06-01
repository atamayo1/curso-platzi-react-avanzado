import React from 'react'
import { PhotoCard } from '../PhotoCard'
// import { ReactLoading } from 'react-loading'
// import { ContentSpinner } from './ListOfPhotoCards.styled'
// import { photos } from '../../../api/db.json'

export const ListOfPhotoCards = ({ data }) => {
  // console.log('categoryId prop', categoryId)
  // console.log('data photos', data)
  return (
    <div>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </div>
  )
}
