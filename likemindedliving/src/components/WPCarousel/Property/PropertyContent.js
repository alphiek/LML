import React from 'react'
import Swiper from 'react-id-swiper';
import { usePropertyData } from '../../../hooks/usePropertyData'
import { CardContainer } from '../WPCarousel'
import PropertyCard from './PropertyCard'

const PropertyContent = () => {
  const data = usePropertyData()
  let propertyItems;

  if (data) {
    propertyItems = data.edges.map(item => <CardContainer key={item.node.id}><PropertyCard content={item.node}/></CardContainer>)
  } else {
    propertyItems = <div>Nothing was returned</div>
  } 

  const params = {
    slidesPerView: 4,
    spaceBetween: 20,
    mousewheel: true,
    grabCursor: true,
    breakpoints: {
      1180: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    }
  }


  return (
    <Swiper {...params}>
    {propertyItems}
    </Swiper>
  )
}

export default PropertyContent