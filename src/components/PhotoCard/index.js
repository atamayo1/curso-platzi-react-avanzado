import React from 'react'
import { ImgWrapper, Img, Button, Article } from './PhotoCard.styled'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, element] = useNearScreen()
  const IconLiked = liked ? MdFavorite : MdFavoriteBorder
  const likedAction = () => {
    setLiked(!liked)
  }

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
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
