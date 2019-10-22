import React from 'react'
import Swiper from 'react-id-swiper';
import { usePropertyData } from '../../../hooks/usePropertyData'
import { CardContainer, CardSpacer } from '../WPCarousel'
import PropertyCard from './PropertyCard'

const PropertyContent = () => {
  const data = usePropertyData()
  let propertyItems;

  if (typeof data !== `undefined`) {
    propertyItems = data.edges.map(item => <CardSpacer key={item.node.id}><CardContainer><PropertyCard content={item.node}/></CardContainer></CardSpacer>)
  } else {
    propertyItems = <div>Nothing was returned</div>
  } 

  const params = {
    slidesPerView: 4,
    spaceBetween: 0,
    grabCursor: true,
    breakpoints: {
      1180: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      610: {
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