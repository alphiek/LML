import React from 'react'
import { useSlides } from '../../hooks/useSlides'
import Swiper from 'react-id-swiper'
import { GetSlides } from './GetSlides'

export const TenantSlides = () => {
  const data = useSlides()
  const slideData = data.edges

  const params = {
    spaceBetween: 0,
    centeredSlides: true,
    effect: 'fade',
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  }

  return <Swiper {...params}>{GetSlides(slideData)}</Swiper>
}
