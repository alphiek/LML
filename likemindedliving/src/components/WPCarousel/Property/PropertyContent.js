import React from 'react'
import { usePropertyData } from '../../../hooks/usePropertyData'
import { CardContainer } from '../WPCarousel'
import PropertyCard from './PropertyCard'

const PropertyContent = () => {

  const data = usePropertyData()
  let propertyItems;

  if (data) {
    propertyItems = data.edges.map(item => <CardContainer key={item.node.id}><PropertyCard  content={item.node}/></CardContainer>)
  } else {
    propertyItems = <div>Nothing was returned</div>
  } 

  return (
    <>
    <div>{propertyItems}</div>
    </>
  )
}

export default PropertyContent