import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './PhotoCard.styled'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    console.log(element)
    const observer = new window.IntersectionObserver((entries) => {
      // console.log(entries)
      const { isIntersecting } = entries[0]
      // console.log({ isIntersecting })
      if (isIntersecting) {
        console.log('si')
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  }, [element])

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button>
            <MdFavoriteBorder size='32px' />
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}
