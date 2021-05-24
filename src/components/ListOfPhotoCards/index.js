import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery, gql } from '@apollo/client'
import { ReactLoading } from 'react-loading'
import { ContentSpinner } from './ListOfPhotoCards.styled'
// import { photos } from '../../../api/db.json'

const withPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

export const ListOfPhotoCards = () => {
  const { loading, error, data } = useQuery(withPhotos)
  // console.log(data)
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <ContentSpinner><ReactLoading type='spin' color='#1b1b1b' /></ContentSpinner>
  }
  return (
    <>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </>
  )
}
