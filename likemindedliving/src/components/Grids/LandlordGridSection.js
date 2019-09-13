import React from 'react'
import styled from 'styled-components'
import Headline from '../Headline/Headline'
import Testimonial from '../Testimonial/Testimonial'
import { SectionContent } from '../sections/LandlordFAQs'
import ProcessGrid from '../ProcessCarousel/ProcessGrid'
import WPCarousel from '../WPCarousel/WPCarousel'
import PressReel from '../PressReel/PressReel'
import LandlordSubGrid from './LandlordSubGrid'


const GridCell = styled.section`
  grid-area: ${props => props.area};
  padding: 2em 0;
  width: auto;
  height: auto;
  background-color: ${props => props.bgColor};
`

const LandlordGridSection = ({ copy, area }) => {
    let section;
    let bgColor = copy[1].bgColor

    if (area === 'headline') {
      section = <GridCell bgColor={bgColor} area={area}><Headline copy={copy[1]}/></GridCell>
    } else if (area === 'sectionOne') {
      section = <GridCell bgColor={bgColor} area={area}><LandlordSubGrid><SectionContent  copy={copy}/></LandlordSubGrid></GridCell>
    } else if (area === 'sectionTwo') {
      section = <GridCell bgColor={bgColor} area={area}><LandlordSubGrid><SectionContent  copy={copy}/></LandlordSubGrid></GridCell>
    } else if (area === 'sectionThree') {
      section = <GridCell bgColor={bgColor} area={area}><LandlordSubGrid><SectionContent  copy={copy}/></LandlordSubGrid></GridCell>
    } else if (area === 'sectionFour') {
      section = <GridCell bgColor={bgColor} area={area}><LandlordSubGrid><SectionContent  copy={copy}/></LandlordSubGrid></GridCell>
    } else if (area === 'process') {
      section = <GridCell bgColor={bgColor} area={area}><ProcessGrid copy={copy[1]}/></GridCell>
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

export default LandlordGridSection