import React from 'react'
import Swiper from 'react-id-swiper'
import { CardContainer, CardSpacer } from '../Carousel'
import PropertyCard from './PropertyCard'

const PropertySwiper = ({ data }) => {
  const propertyItems = data.map(item => (
    <CardSpacer key={item.id}>
      <CardContainer>
        <PropertyCard content={item} />
      </CardContainer>
    </CardSpacer>
  ))

  const params = {
    slidesPerView: 4,
    spaceBetween: 0,
    grabCursor: true,
    breakpoints: {
      1180: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      950: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      680: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  }

  return <Swiper {...params}>{propertyItems}</Swiper>
}

export default PropertySwiper
