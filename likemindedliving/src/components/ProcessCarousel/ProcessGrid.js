import React from 'react'
import styled from 'styled-components'
import SlideContainer from './SlideContainer'
import Heading from './Heading'


const CarouselGrid = styled.div`
  margin: 2em 20%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 0.5fr 0.5fr 0.5fr;
  grid-template-areas: 
  'header content'
  '. content'
  '. content';
  padding-bottom: 2em;   
  @media (max-width: 1024px) {
    margin: 0 25%;
    grid-template-columns: 100%;
    grid-template-areas: 
    'header'
    'content';
  }
  @media (max-width: 1024px) {
    margin: 0 20%;
  }
  @media (max-width: 1024px) {
    margin: 0 15%;
  }
`

const ProcessGrid = ({ copy }) => {
  return (
    <CarouselGrid>
      <Heading 
        h3={copy.h3}
        p={copy.p1}
        color={copy.color}
        pColor={copy.bgColor}
        />
      <SlideContainer copy={copy.steps} landlord={copy.landlord} link={copy.link}/>
    </CarouselGrid>
  )
}

export default ProcessGrid