import { useEffect, useState, useRef } from 'react'

export const useNearScreen = () => {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      // console.log(element)
      const observer = new window.IntersectionObserver((entries) => {
        // console.log(entries)
        const { isIntersecting } = entries[0]
        // console.log({ isIntersecting })
        if (isIntersecting) {
          // console.log('si')
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [])
  return [show, element]
}
