import React from 'react'
import { useQuery } from '@apollo/client'
import { PhotoCard } from '../../components/PhotoCard'
import { GET_SINGLE_PHOTO } from '../../hoc/getSinglePhoto'

export const PhotoCardContainer = ({ id }) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: { id }
  })
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return 'Cargando Photo Card...'
  }
  return <PhotoCard key={id} {...data} />
}
