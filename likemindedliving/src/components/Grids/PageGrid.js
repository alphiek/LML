import React from "react"
import styled from 'styled-components'
import GridItem from './GridItem'

const TenantGrid = styled.div`
   display: grid;
   width: 100%;
   height: 100%;
   grid-template-columns: 100%;
   grid-template-areas: 
   'headline'
   'sectionOne'
   'process'
   'sectionTwo'
   'sectionThree'
   'sectionFour'
   'properties'
   'testimonials'
   'pressReel'
   'blogs';   
`

const LandlordGrid = styled.div`
   display: grid;
   width: 100%;
   height: 100%;
   grid-template-columns: 100%;
   grid-template-areas: 
   'headline'
   'sectionOne'
   'process'
   'sectionTwo'
   'sectionThreeLandlord'
   'sectionFour'
   'testimonials'
   'pressReel'
   'blogs';   
`

const PageGrid = ({ copy }) => {
  let data = Object.entries(copy)
  let item = data.slice(1).map((item, index) => <GridItem key={item[0]} area={item[0]} copy={item}/>)
    
  let grid;

  if ( copy.tenants ) {
    grid = <TenantGrid>{item}</TenantGrid>
  } else if ( copy.landlord ) {
    grid = <LandlordGrid>{item}</LandlordGrid>
  } else {
    grid = <p>There is a problem here!</p>
  }

  return (
    <div>{grid}</div>
  )
}


export default PageGrid