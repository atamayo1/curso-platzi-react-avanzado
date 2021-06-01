import { gql } from '@apollo/client'

export const LIKE_PHOTO = gql`
  mutation postLikePhoto($input: LikePhoto!) {
    likePhoto(input: $input)
  }
`
