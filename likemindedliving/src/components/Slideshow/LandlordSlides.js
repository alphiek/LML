import React from 'react'
import { useLandlordSlides } from '../../hooks/useLandlordSlides'
import Swiper from 'react-id-swiper'
import { GetSlides } from './GetSlides'

export const LandlordSlides = () => {
  const data = useLandlordSlides()
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
