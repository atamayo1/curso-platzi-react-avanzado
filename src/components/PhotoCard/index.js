import React from 'react'
import { ImgWrapper, Img, Button, Article } from './PhotoCard.styled'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useMutation } from '@apollo/client'
import { LIKE_PHOTO } from '../../hoc/postLikePhoto'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const IconLiked = liked ? MdFavorite : MdFavoriteBorder
  const [likePhoto] = useMutation(LIKE_PHOTO)
  const likedAction = () => {
    setLiked(!liked)
    likePhoto({
      variables: {
        input: {
          id: id
        }
      }
    })
  }
  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button onClick={likedAction}>
            <IconLiked size='32px' />
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}
