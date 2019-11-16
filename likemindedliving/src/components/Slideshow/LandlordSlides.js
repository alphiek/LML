import React from 'react'
import { useLandlordSlides } from '../../hooks/useLandlordSlides'
import Swiper from 'react-id-swiper'
import { Slide, SlideWrapper } from './slideshowStyles'

export const LandlordSlides = () => {
  const data = useLandlordSlides()
  
  let slides =
    data &&
    data.edges.map(({ node }) => (
      <SlideWrapper key={node.id}>
        <Slide
          fluid={node.childImageSharp.fluid}
          alt="Images of properties"
          objectFit="cover"
          objectPosition="50% 50%"
        />
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
