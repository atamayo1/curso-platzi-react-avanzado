import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/Global.styled'
import { Logo } from './components/Logo'
import { PhotoCardContainer } from './containers/PhotoCard'
import { ListOfPhotoCardsContainer } from './containers/ListOfPhotoCards'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  const showDetail = detailId ? <PhotoCardContainer id={detailId} /> : <><ListOfCategories /><ListOfPhotoCardsContainer categoryId={1} /></>
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {showDetail}
    </div>
  )
}
