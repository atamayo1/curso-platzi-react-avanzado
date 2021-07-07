import { gql } from '@apollo/client'

export const LIKE_PHOTO = gql`
mutation addLikeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input){
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`
