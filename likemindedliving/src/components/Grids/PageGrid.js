import React from "react"
import styled from 'styled-components'
import GridSection from './GridSection'
import LandlordGridSection from './LandlordGridSection'

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
   'sectionThree'
   'sectionFour'
   'pressReel'
   'testimonials'
   'blogs';   
`

const PageGrid = ({ copy }) => {
  let data = Object.entries(copy)
  let item = data.slice(1).map((item, index) => <GridSection key={index} area={item[0]} copy={item}/>)
  let landlorditem = data.slice(1).map((item, index) => <LandlordGridSection key={index} area={item[0]} copy={item}/>)
    
  let grid;

  if ( copy.tenants ) {
    grid = <TenantGrid>{item}</TenantGrid>
  } else if ( copy.landlord ) {
    grid = <LandlordGrid>{landlorditem}</LandlordGrid>
  } else {
    grid = <p>There is a problem here!</p>
  }

  return (
    <div>{grid}</div>
  )
}


export default PageGrid