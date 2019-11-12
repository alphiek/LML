import React from 'react'
import { useSlides } from '../../hooks/useSlides'
import Swiper from 'react-id-swiper'
import { Slide } from './slideshowStyles'

export const TenantSlides = () => {
  const data = useSlides()

  let slides =
    data &&
    data.edges.map(({ node }) => (
      <div key={node.id}>
        <Slide fluid={node.childImageSharp.fluid} alt="" />
      </div>
    ))

  const params = {
    spaceBetween: 0,
    centeredSlides: true,
    effect: 'fade',
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  }

  return <Swiper {...params}>{slides}</Swiper>
}