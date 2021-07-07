import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './FavButton.styled'

export const FavButton = ({ liked, likes, onClick }) => {
  const IconLiked = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <IconLiked size='32px' /> {likes} likes!
    </Button>
  )
}
