import React from 'react'
import { LIKE_PHOTO } from '../../hoc/postLikePhotoAnonymous'
import { Mutation } from '@apollo/client'

export const ToggleLikeMutation = ({ children }) => {
  return (
    <Mutation mutation={LIKE_PHOTO}>
      {children}
    </Mutation>
  )
}
