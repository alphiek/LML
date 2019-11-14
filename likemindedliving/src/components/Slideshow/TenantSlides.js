import React from 'react'
import { useSlides } from '../../hooks/useSlides'
import Swiper from 'react-id-swiper'
import { Slide, SlideWrapper } from './slideshowStyles'

export const TenantSlides = () => {
  const data = useSlides()

  let slides =
    data &&
    data.edges.map(({ node }) => (
      <SlideWrapper key={node.id}>
        <Slide fluid={node.childImageSharp.fluid} alt="Images of properties" />
      </SlideWrapper>
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