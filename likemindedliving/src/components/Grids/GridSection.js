import React from 'react'
import styled from 'styled-components'

import SectionSubGrid from './SectionSubGrid'
import Headline from '../Headline/Headline'
import PropertySearch from '../sections/PropertySearch'
import HouseMate from '../sections/HouseMate'
import Algorithm from '../sections/Algorithm'
import IdealChoice from '../sections/IdealChoice'
import ProcessGrid from '../ProcessCarousel/ProcessGrid'
import Testimonial from '../Testimonial/Testimonial'
import WPCarousel from '../WPCarousel/WPCarousel'
import PressReel from '../PressReel/PressReel'


const GridCell = styled.section`
  grid-area: ${props => props.area};
  padding: 1em 0;
  width: auto;
  height: auto;
  background-color: ${props => props.bgColor};
`

const GridSection = ({ copy, area }) => {
    let section;
    let bgColor = copy[1].bgColor

    if (area === 'headline') {
      section = <GridCell bgColor={bgColor} area={area}><Headline copy={copy[1]}/></GridCell>
    } else if (area === 'sectionOne') {
      section = <GridCell bgColor={bgColor} area={area}><SectionSubGrid><PropertySearch copy={copy}/></SectionSubGrid></GridCell>
    } else if (area === 'sectionTwo') {
      section = <GridCell bgColor={bgColor} area={area}><SectionSubGrid><HouseMate copy={copy}/></SectionSubGrid></GridCell>
    } else if (area === 'sectionThree') {
      section = <GridCell bgColor={bgColor} area={area}><SectionSubGrid><Algorithm copy={copy}/></SectionSubGrid></GridCell>
    } else if (area === 'sectionFour') {
      section = <GridCell bgColor={bgColor} area={area}><SectionSubGrid><IdealChoice copy={copy}/></SectionSubGrid></GridCell>
    } else if (area === 'process') {
      section = <GridCell bgColor={bgColor} area={area}><ProcessGrid copy={copy[1]}/></GridCell>
    } else if (area === 'properties') {
      section = <GridCell bgColor={bgColor} area={area}><WPCarousel copy={copy}/></GridCell>
    } else if (area === 'testimonials') {
      section = <GridCell bgColor={bgColor} area={area}><Testimonial copy={copy}/></GridCell>
    } else if (area === 'pressReel') {
      section = <GridCell bgColor={bgColor} area={area}><PressReel copy={copy}/></GridCell>
    } else if (area === 'blogs') {
      section = <GridCell bgColor={bgColor} area={area}><WPCarousel copy={copy}/></GridCell>
    } else {
      section = <div>There is a problem with GridItem</div>
    }

    return (
      <>
      {section}
      </>
    )
}

export default GridSection